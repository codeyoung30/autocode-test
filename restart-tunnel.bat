@echo off
echo ======================================
echo 重新启动公网隧道
echo ======================================
echo.

echo [1/2] 检查本地服务器状态...
netstat -ano | findstr :8080
if %errorlevel% neq 0 (
    echo 本地服务器未运行,正在启动...
    start "LocalHTTPServer" cmd /k "cd /d c:\Users\36285\WorkBuddy\20260318151049 && http-server -p 8080"
    timeout /t 3 /nobreak >nul
)

echo.
echo [2/2] 创建新的公网隧道...
echo 正在连接 Localtunnel,请稍候...
echo.

lt --port 8080 --subdomain metabolism-analysis

pause
