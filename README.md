Casi todas las rutas tienen frontend para interactuar a excepción de:

1. http://localhost:8080/api/productos/:id Método PUT
2. http://localhost:8080/api/productos/:id Método DELETE
3. http://localhost:8080/api/carrito/:id Método DELETE
4. http://localhost:8080/api/carrito/:id/productos/:id_prod Método DELETE

Utilización

1. Método PUT: Body -> Raw en JSON:
   {
   "title": "AAAA",
   "price": "22",
   "thumbnail": "a1.com",
   "description": "Hoja con letras",
   "code": "AAAA111",
   "stock": "6"
   }
   Send
2. Método DELETE: Body -> none:
3. Método DELETE: Body -> none:
4. Método DELETE: Body -> none:
