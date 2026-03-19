# 启动公网隧道脚本
Write-Host "======================================" -ForegroundColor Green
Write-Host "  启动新陈代谢分析公网隧道" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green
Write-Host ""

# 检查本地服务器
Write-Host "[1/2] 检查本地服务器..." -ForegroundColor Yellow
$serverRunning = netstat -ano | Select-String ":8080" | Select-String "LISTENING"

if (-not $serverRunning) {
    Write-Host "本地服务器未运行,正在启动..." -ForegroundColor Red
    Start-Process cmd -ArgumentList "/k cd /d c:\Users\36285\WorkBuddy\20260318151049 && http-server -p 8080" -WindowStyle Normal
    Write-Host "等待服务器启动..." -ForegroundColor Yellow
    Start-Sleep -Seconds 3
} else {
    Write-Host "✓ 本地服务器运行正常" -ForegroundColor Green
}

Write-Host ""
Write-Host "[2/2] 创建公网隧道..." -ForegroundColor Yellow
Write-Host "请稍候,正在连接..." -ForegroundColor Cyan
Write-Host ""

# 启动 tunnel
lt --port 8080 --subdomain metabolism-analysis

Write-Host ""
Write-Host "按任意键退出..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
