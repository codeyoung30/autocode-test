# 🚀 GitHub Pages 部署方案 (推荐)

## 为什么选择 GitHub Pages?

✅ **完全免费** - 无需付费
✅ **永久稳定** - 不会像 Localtunnel 断开
✅ **HTTPS 自动** - 安全访问
✅ **CDN 加速** - 全球访问快
✅ **自定义域名** - 可绑定自己的域名
✅ **版本控制** - 自动记录每次更新

---

## 📝 部署步骤 (5分钟搞定)

### 1. 创建 GitHub 账号
访问: https://github.com/signup (已有账号则跳过)

### 2. 创建新仓库
1. 登录 GitHub,点击右上角 `+` → `New repository`
2. 仓库名称: `metabolism-analysis`
3. 设置为 `Public` (公开)
4. 勾选 `Add a README file`
5. 点击 `Create repository`

### 3. 上传文件

**方式一: 网页上传(最简单)**
1. 在仓库页面点击 `Add file` → `Upload files`
2. 拖拽 `index.html` 文件到上传区域
3. 在底部提交信息填写: `Initial upload`
4. 点击 `Commit changes`

**方式二: 使用 Git 命令**
```powershell
cd c:/Users/36285/WorkBuddy/20260318151049
git init
git add index.html
git commit -m "Initial upload"
git branch -M main
git remote add origin https://github.com/你的用户名/metabolism-analysis.git
git push -u origin main
```

### 4. 启用 GitHub Pages

1. 进入仓库页面
2. 点击 `Settings` → `Pages`
3. 在 `Build and deployment` 下:
   - `Source` 选择 `Deploy from a branch`
   - `Branch` 选择 `main`
   - `Folder` 选择 `/(root)`
4. 点击 `Save`

### 5. 获取访问链接

等待 1-2 分钟后,会看到类似这样的链接:
```
https://你的用户名.github.io/metabolism-analysis/
```

---

## 🔄 更新网站

### 方式一: 网页更新
1. 在仓库点击 `index.html` 文件
2. 点击铅笔图标 `✎` 编辑
3. 修改后填写提交信息
4. 点击 `Commit changes`

### 方式二: Git 命令更新
```powershell
cd c:/Users/36285/WorkBuddy/20260318151049
git add index.html
git commit -m "Update website"
git push
```

GitHub Pages 会自动部署,无需手动操作!

---

## 🌐 最终访问链接

```
https://你的用户名.github.io/metabolism-analysis/
```

这个链接:
- ✅ 永久有效
- ✅ 支持 HTTPS
- ✅ 全球 CDN 加速
- ✅ 可分享给任何人
- ✅ 支持自定义域名

---

## 📱 测试建议

部署完成后:
1. 在手机浏览器测试响应式布局
2. 分享链接给朋友测试
3. 检查所有交互功能
4. 验证图表渲染是否正常

---

## 💡 其他优势

- **自动备份** - GitHub 自动保存历史版本
- **协作方便** - 可以邀请他人共同编辑
- **数据分析** - 可以查看访问统计
- **无需服务器** - 完全托管在 GitHub
- **免费域名** - .github.io 子域名免费使用

---

## 🆚 对比其他方案

| 方案 | 费用 | 稳定性 | 配置难度 | 推荐度 |
|------|------|--------|----------|--------|
| GitHub Pages | 免费 | ⭐⭐⭐⭐⭐ | 简单 | ⭐⭐⭐⭐⭐ |
| 腾讯云 COS | 低价 | ⭐⭐⭐⭐ | 中等 | ⭐⭐⭐⭐ |
| Localtunnel | 免费 | ⭐⭐ | 简单 | ⭐⭐ |
| 自建服务器 | 昂贵 | ⭐⭐⭐ | 复杂 | ⭐⭐⭐ |

**强烈推荐使用 GitHub Pages!**
