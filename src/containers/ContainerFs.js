import { readFileSync, promises } from "fs";

class ContainerFs {
    constructor(filePath) {
        this.filePath = filePath;
    };

    syncGetAll() {
        try {
            const archivo = readFileSync(this.filePath);
            const items = JSON.parse(archivo);
            return (items);
        } catch (e) {
            console.log(e);
        }
    };

    async getAll() {
        try {
            const archivo = await promises.readFile(this.filePath);
            const items = JSON.parse(archivo);
            return (items);
        } catch (e) {
            console.log(e);
        }
    };

    async save(item) {
        try {
            const items = await this.getAll();
            const id =
                items.length === 0
                    ? 1
                    : items[items.length - 1].id + 1;
            item.id = id;
            items.push(item);
            promises.writeFile(
                this.filePath,
                JSON.stringify(items, null)
            );
        } catch (e) {
            console.log(e);
        }
    };

    saveNewProd = async (producto, id) => {
        try {
            const carritos = await this.getAll();
            let carritoSelec = carritos[id - 1]
            carritoSelec.prods.push(producto);
            promises.writeFile(
                this.filePath,
                JSON.stringify(carritos, null)
            );
        } catch (e) { console.log(e) }
    };

    async getById(id) {
        try {
            const dataRecuperada = await this.getAll();
            const dataNueva = dataRecuperada.find((data) => data.id == id);
            return dataNueva;
        } catch (e) {
            console.log(e);
        }
    };

    async getByTitle(title) {
        try {
            const dataRecuperada = await this.getAll();
            const dataNueva = dataRecuperada.find((data) => data.title == title);
            return dataNueva;
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
            promises.writeFile(
                this.filePath,
                JSON.stringify(carritos, null)
            );
            console.log("producto borrado");
        } catch (e) {
            console.log(e);
        }
    };

    async deleteById(id) {
        try {
            const items = await this.getAll();
            const itemEncontrado = items.find((e) => e.id == id);
            if (!itemEncontrado) return console.log("el id no existe");
            const itemsFiltrados = items.filter((e) => e.id != id);
            promises.writeFile(
                this.filePath,
                JSON.stringify(itemsFiltrados, null)
            );
            console.log("item borrado");
        } catch (e) {
            console.log(e);
        }
    };

    async deleteAll() {
        try {
            await promises.writeFile(
                this.filePath,
                JSON.stringify([], null)
            );
            console.log("se borraron todos los items");
        } catch (e) {
            console.log(e);
        }
    };

    async updateById(id, title, price, thumbnail, description, code, stock) {
        try {
            const items = await this.getAll();
            const item = items.find((prod) => prod.id == id);
            if (item) {
                item.title = title;
                item.price = price;
                item.thumbnail = thumbnail;
                item.description = description;
                item.code = code;
                item.stock = stock;
                console.log(item);
                await promises.writeFile(
                    this.filePath,
                    JSON.stringify(items, null, 2)
                );
                return item;
            } else {
                return { error: "Item no encontrado" };
            }
        } catch (error) {
            console.log(error);
        }
    };

};

export default ContainerFs;