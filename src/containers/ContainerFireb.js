import admin from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("../DB/backend-d7c5d-firebase-adminsdk-e3v95-2997023236.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

class ContainerFireb {
    constructor(coll) {
        this.coll = coll;
    };

    async syncGetAll() {
        try {
            const getColl = await db.collection(this.coll).get()
            const items = getColl.forEach(doc => {
                { doc.data() }
            });
            return [items];
        } catch (e) {
            console.log(e);
        }
    };

    async save(item) {
        try {
            const items = await this.syncGetAll();
            const id =
                items.length === 0
                    ? 1
                    : items[items.length - 1].id + 1;
            item.id = id;
            await db.collection(this.coll).add(item);
        } catch (e) {
            console.log(e);
        }
    };

    saveNewProd = async (producto, id) => {
        try {
            const carritos = await this.syncGetAll();
            let carritoSelec = carritos.filter(item => item.id == id)
            let data = { ...carritoSelec.prods, ...producto }
            await db.collection(this.coll).doc(id).set(data)
        } catch (e) { console.log(e) }
    };

    async getById(id) {
        try {
            const dataRecuperada = await this.syncGetAll();
            const dataNueva = dataRecuperada.find((data) => data.id == id);
            return dataNueva;
        } catch (e) {
            console.log(e);
        }
    };

    async getByTitle(title) {
        try {
            const dataRecuperada = await this.syncGetAll();
            const dataNueva = dataRecuperada.find((data) => data.title == title);
            return dataNueva;
        } catch (e) {
            console.log(e);
        }
    };

    async deleteById(id) {
        try {
            const items = await this.syncGetAll();
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
            const items = await this.syncGetAll();
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

export default ContainerFireb;