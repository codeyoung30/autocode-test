const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 腾讯云 COS 配置
const cosConfig = {
  secretId: process.env.TENCENT_SECRET_ID || '',
  secretKey: process.env.TENCENT_SECRET_KEY || '',
  bucket: 'metabolism-analysis-20260319',
  region: 'ap-guangzhou',
  filePath: 'index.html'
};

function getAuthorization(method, pathname, query, headers, secretId, secretKey) {
  // 简化的授权签名计算
  const host = `${cosConfig.bucket}.cos.${cosConfig.region}.myqcloud.com`;
  const now = new Date().toUTCString();
  const date = new Date().toISOString().substr(0, 10);

  const keyTime = Math.floor(Date.now() / 1000) + '/' + (Math.floor(Date.now() / 1000) + 600);
  const signKey = crypto.createHmac('sha1', secretKey).update(keyTime).digest('hex');

  const httpString = `${method.toLowerCase()}\n${pathname}\n${query}\nhost=${host}\n`;
  const stringToSign = `sha1\n${keyTime}\n${crypto.createHash('sha1').update(httpString).digest('hex')}\n`;
  const signature = crypto.createHmac('sha1',signKey).update(stringToSign).digest('hex');

  return `q-sign-algorithm=sha1&q-ak=${secretId}&q-sign-time=${keyTime}&q-key-time=${keyTime}&q-header-list=host&q-url-param-list=&q-signature=${signature}`;
}

async function uploadFile() {
  if (!cosConfig.secretId || !cosConfig.secretKey) {
    console.error('错误: 未设置腾讯云密钥');
    console.error('请设置环境变量:');
    console.error('  TENCENT_SECRET_ID=你的密钥ID');
    console.error('  TENCENT_SECRET_KEY=你的密钥Key');
    process.exit(1);
  }

  const filePath = path.join(__dirname, cosConfig.filePath);
  const fileContent = fs.readFileSync(filePath);
  const fileSize = fs.statSync(filePath).size;

  console.log(`准备上传文件: ${cosConfig.filePath} (${(fileSize/1024).toFixed(2)} KB)`);

  const host = `${cosConfig.bucket}.cos.${cosConfig.region}.myqcloud.com`;
  const url = `https://${host}/${cosConfig.filePath}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': getAuthorization('PUT', `/${cosConfig.filePath}`, '', {}, cosConfig.secretId, cosConfig.secretKey),
        'Host': host,
        'Content-Type': 'text/html',
        'Content-Length': fileSize.toString()
      },
      body: fileContent
    });

    if (response.ok) {
      console.log('✅ 文件上传成功!');
      console.log(`\n访问链接: ${url}`);
      console.log(`\n提示: 请确保存储桶设置为"公共读"权限`);
    } else {
      console.error('❌ 上传失败:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('错误详情:', errorText);
    }
  } catch (error) {
    console.error('❌ 上传出错:', error.message);
    console.error('\n可能的原因:');
    console.error('1. 存储桶不存在,需要先创建');
    console.error('2. 密钥权限不足');
    console.error('3. 网络连接问题');
  }
}

uploadFile();
