const fs = require("fs");

class Cart {
    constructor() {
        this.filePath = "./cart.json";
    };

    syncGetAll = () => {
        const archivo = fs.readFileSync(this.filePath);
        const carritos = JSON.parse(archivo);
        return carritos
    }

    getAll = async () => {
        try {
            const archivo = await fs.promises.readFile(this.filePath);
            const carritos = JSON.parse(archivo);
            return (carritos);
        } catch (e) {
            console.log(e);
        }
    };

    save = async (carrito) => {
        try {
            const carritos = await this.getAll();
            const id =
                carritos.length === 0
                    ? 1
                    : carritos[carritos.length - 1].id + 1;
            carrito.id = id;
            carritos.push(carrito);
            fs.promises.writeFile(
                this.filePath,
                JSON.stringify(carritos, null)
            );
        } catch (e) { }
    };

    saveNewProd = async (producto, id) => {
        try {
            const carritos = await this.getAll();
            let carritoSelec = carritos[id - 1]
            carritoSelec.prods.push(producto);
            fs.promises.writeFile(
                this.filePath,
                JSON.stringify(carritos, null)
            );
        } catch (e) { console.log(e) }
    };

    getById = async (id) => {
        try {
            const dataRecuperada = await this.getAll();
            const dataNueva = dataRecuperada.find((data) => data.id == id);
            return dataNueva;
        } catch (e) {
            console.log(e);
        }
    };

    async deleteById(id) {
        try {
            const carritos = await this.getAll();
            const carritoEncontrado = carritos.find((e) => e.id == id);
            if (!carritoEncontrado) return console.log("el id no existe");
            const carritosFiltrados = carritos.filter((e) => e.id != id);
            fs.promises.writeFile(
                this.filePath,
                JSON.stringify(carritosFiltrados, null)
            );
            console.log("carrito borrado");
        } catch (e) {
            console.log(e);
        }
    };

    async deleteProdById(id, id_prod) {
        try {
            const carritos = await this.getAll();
            const carritoEncontrado = carritos.find((e) => e.id == id);
            if (!carritoEncontrado) return console.log("el id no existe");
            const prods = carritoEncontrado.prods
            const carritosFiltrados = prods.filter((e) => e.id != id_prod);
            carritoEncontrado.prods = carritosFiltrados
            fs.promises.writeFile(
                this.filePath,
                JSON.stringify(carritos, null)
            );
            console.log("producto borrado");
        } catch (e) {
            console.log(e);
        }
    };

    deleteAll = async () => {
        try {
            await fs.promises.writeFile(
                this.filePath,
                JSON.stringify([], null)
            );
            console.log("se borraron todos los carritos");
        } catch (e) {
            console.log(e);
        }
    };

    updateById = async (id, title, price, thumbnail) => {
        try {
            const carritos = await this.getAll();
            const item = carritos.find((prod) => prod.id == id);
            if (item) {
                item.title = title;
                item.price = price;
                item.thumbnail = thumbnail;
                console.log(item);
                await fs.promises.writeFile(
                    this.filePath,
                    JSON.stringify(carritos, null, 2)
                );
                return item;
            } else {
                return { error: "Producto no encontrado" };
            }
        } catch (error) {
            console.log(error);
        }
    };

};

module.exports = Cart;