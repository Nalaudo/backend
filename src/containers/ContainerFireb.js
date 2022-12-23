import admin from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("../DB/backend-d7c5d-firebase-adminsdk-e3v95-2997023236.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export const db = getFirestore();

class ContainerFireb {
    constructor(coll) {
        this.coll = coll;
        this.fireb = "fireb"
    };

    async syncGetAll() {
        try {
            const getColl = await db.collection(this.coll).get()
            const docs = []
            getColl.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            return docs;
        } catch (e) {
            console.log(e);
        }
    };

    async save(item) {
        try {
            await db.collection(this.coll).add(item);
        } catch (e) {
            console.log(e);
        }
    };

    saveNewProd = async (producto, id) => {
        try {
            const carritos = await this.syncGetAll();
            let carritoSelec = carritos.filter(item => item.id == id)
            let carritoProds = carritoSelec[0].prods
            let newProd = { ...producto }
            carritoProds.push(newProd)
            await db.collection(this.coll).doc(id).update({
                prods: carritoProds
            });
        } catch (e) { console.log(e) }
    };

    async getById(id) {
        try {
            const dataRecuperada = await this.syncGetAll();
            let dataNueva = undefined
            if (id > 1) {
                dataNueva = dataRecuperada.find((data) => data.timestamp == id);
            } else {
                dataNueva = dataRecuperada.find((data) => data.id == id);
            }
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

    async deleteProdById(id, id_prod) {
        try {
            const carritos = await this.syncGetAll();
            const carritoEncontrado = carritos.find((e) => e.id == id);
            if (!carritoEncontrado) return console.log("el id no existe");
            const prods = carritoEncontrado.prods
            const carritosFiltrados = prods.filter((e) => e.id != id_prod);
            await db.collection(this.coll).doc(id).update({
                prods: carritosFiltrados
            });
            console.log("producto borrado");
        } catch (e) {
            console.log(e);
        }
    };

    async deleteById(id) {
        try {
            await db.collection(this.coll).doc(id).delete();
            console.log("item borrado");
        } catch (e) {
            console.log(e);
        }
    };

    async deleteAll() {
        try {
            db.collection("collectionName")
                .get()
                .then(res => {
                    res.forEach(element => {
                        element.ref.delete();
                    });
                });
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
                await db.collection(this.coll).doc(id).update({
                    title: title,
                    price: price,
                    thumbnail: thumbnail,
                    description: description,
                    code: code,
                    stock: stock
                });
            } else {
                return { error: "Item no encontrado" };
            }
        } catch (error) {
            console.log(error);
        }
    };

};

export default ContainerFireb;