const fs = require("fs");

class Contenedor {
    constructor() {
        this.filePath = "./products.json";
    };

    getAll = async () => {
        try {
            const archivo = await fs.promises.readFile(this.filePath);
            const productos = JSON.parse(archivo);
            return productos;
        } catch (e) {
            console.log(e);
        }
    };
    save = async (producto) => {
        try {
            const productos = await this.getAll();
            const id =
                productos.length === 0
                    ? 1
                    : productos[productos.length - 1].id + 1;
            producto.id = id;
            productos.push(producto);
            await fs.promises.writeFile(
                this.filePath,
                JSON.stringify(productos, null)
            );
        } catch (e) {}
    };
    getById = async (id) => {
        try {
            const dataRecuperada = await this.getAll();
            const dataNueva = dataRecuperada.filter((data) => data.id === id);
            if (dataNueva !== id) {
                console.log("No existe producto con ese id");
            } else {
                console.log(dataNueva);
            }
        } catch (e) {
            console.log(e);
        }
    };

    async deleteById(id) {
        try {
            const productos = await this.getAll();
            const productoEncontrado = productos.find((e) => e.id == id);
            if (!productoEncontrado) return console.log("El id no existe");
            const productosFiltrados = productos.filter((e) => e.id != id);
            await fs.promises.writeFile(
                this.filePath,
                JSON.stringify(productosFiltrados, null)
            );
            console.log("producto borrado");
        } catch (e) {
            console.log(e);
        }
    }
    deleteAll = async () => {
        try {
            await fs.promises.writeFile(
                this.filePath,
                JSON.stringify([], null)
            );
            console.log("se borraron todos los productos");
        } catch (e) {
            console.log(e);
        }
    };
};

const contenedor = new Contenedor();

contenedor.save({
    title: 'Ferrari',
    price: 280000,
    thumbnail: 'https://phantom-marca.unidadeditorial.es/0fa9e4b2433f7eada8f97d2374e54f48/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/05/16517455111875.jpg',
    id: 0, // no modificar
})