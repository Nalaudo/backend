class ContainerMem {
    constructor(arr) {
        this.arr = arr;
    };

    syncGetAll() {
        try {
            const items = this.arr
            return items
        } catch (e) {
            console.log(e);
        }
    };

    save(item) {
        try {
            const items = this.syncGetAll();
            const id =
                items.length === 0
                    ? 1
                    : items[items.length - 1].id + 1;
            item.id = id;
            items.push(item);
        } catch (e) {
            console.log(e);
        }
    };

    saveNewProd = async (producto, id) => {
        try {
            const carritos = await this.syncGetAll();
            let carritoSelec = carritos[id - 1]
            carritoSelec.prods.push(producto);
        } catch (e) { console.log(e) }
    };

    getById(id) {
        try {
            const dataRecuperada = this.syncGetAll();
            const dataNueva = dataRecuperada.find((data) => data.id == id);
            return dataNueva;
        } catch (e) {
            console.log(e);
        }
    };

    getByTitle(title) {
        try {
            const dataRecuperada = this.syncGetAll();
            const dataNueva = dataRecuperada.find((data) => data.title == title);
            return dataNueva;
        } catch (e) {
            console.log(e);
        }
    };

    deleteById(id) {
        try {
            const items = this.syncGetAll();
            const itemEncontrado = items.find((e) => e.id == id);
            if (!itemEncontrado) return console.log("el id no existe");
            const itemsFiltrados = items.filter((e) => e.id != id);
            this.arr = itemsFiltrados
            console.log("item borrado");
        } catch (e) {
            console.log(e);
        }
    };

    deleteAll() {
        try {
            this.arr = []
            console.log("se borraron todos los items");
        } catch (e) {
            console.log(e);
        }
    };

    updateById(id, title, price, thumbnail, description, code, stock) {
        try {
            const items = this.syncGetAll();
            const item = items.find((prod) => prod.id == id);
            if (item) {
                item.title = title;
                item.price = price;
                item.thumbnail = thumbnail;
                item.description = description;
                item.code = code;
                item.stock = stock;
                console.log(item);
                promises.writeFile(
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

export default ContainerMem;