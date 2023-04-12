Para iniciar el proyecto, correr el script deseado para el modo deseado con la persistencia deseada:
dev:mongo = Desarrollo con persistencia en mongo
dev:mem = Desarrollo con persistencia en memoria
prod = Producción (mongo)

Para correr tests, primero inciciar el servidor y luego correr el test para la persistencia seleccionada al correr el servidor.

Endpoints:
/api/products => obtener todos los productos
/api/products/:id => obtener un producto por id
/api/products/category/:category => obtener todos los productos por categoría (organics/inorganics)

/signup => Registrar usuario
/login => Ingresar con un usuario
/logout => Cerrar sesión de usuario
/profile => Ver perfil del usuario

/cart => Ver carrito del usuario
/checkout => Realizar el pedido de los productos dentro del carrito

/support => Chat de quejas

Los métodos de /api/products pueden ser testeados desde Postman.
