@echo off
echo ======================================
echo 本地Web服务器 + 公网访问启动器
echo ======================================
echo.

echo [步骤 1/2] 启动本地HTTP服务器...
start "LocalHTTPServer" cmd /k "cd /d c:\Users\36285\WorkBuddy\20260318151049 && http-server -p 8080 -o"

echo 等待服务器启动...
timeout /t 3 /nobreak >nul

echo.
echo [步骤 2/2] 创建公网访问链接...
echo 正在创建内网穿透,请稍候...
echo.

lt --port 8080

pause
