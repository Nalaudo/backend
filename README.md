Para utilizar los metodos put y delete importar Backend.postman_collection.json dentro de postman.

Para iniciar los server:
cd ./NginxNode
Modo fork: pm2 start server.js --name="Server1" --watch -- 8080
Modo cluster: pm2 start server.js --name="Server2" --watch -i max -- 8082
Modo cluster: pm2 start server.js --name="Server2" --watch -i max -f -- 8083
Modo cluster: pm2 start server.js --name="Server2" --watch -i max -f -- 8084
Modo cluster: pm2 start server.js --name="Server2" --watch -i max -f -- 8085

Nginx:
Check existencia: tasklist /fi "imagename eq nginx.exe"
Iniciar nginx: .\nginx.exe
Recargar luego de hacer cambios: ./nginx.exe -s reload
Matar proceso: taskkill /F /PID <pid>
