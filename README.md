Para utilizar los metodos put y delete importar Backend.postman_collection.json dentro de postman.

Para iniciar el server en cluster:

pm2 start server.js --name="Server" --watch -i max -- 8080
