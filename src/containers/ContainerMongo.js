import { Products } from '../DB/models/products.js';
import { Carts } from '../DB/models/carts.js';

class ContainerMongo {
    constructor(coll) {
        this.coll = coll;
        this.success = undefined
    };

    async syncGetAll() {
        try {
            let res = undefined
            if (this.coll == "products") {
                res = await Products.find({})
            } else if (this.coll == "carts") {
                res = await Carts.find({})
            }
            return res;
        } catch (e) {
            console.log(e);
        }
    };

    async save(item) {
        try {
            let res = undefined
            if (this.coll == "products") {
                res = await new Products(item)
            } else if (this.coll == "carts") {
                res = await new Carts(item)
            }
            await res.save()
        } catch (e) {
            console.log(e);
        }
    }

    async saveNewProd(producto, id) {
        try {
            const carritos = await this.syncGetAll();
            let carritoSelec = carritos.filter(item => item.id == id)
            let carritoProds = carritoSelec[0].prods
            carritoProds.push(producto)
            await Carts.findByIdAndUpdate(id, {
                prods: carritoProds
            });
        } catch (e) { console.log(e) }
    };

    async getById(id) {
        try {
            let res = undefined
            if (this.coll == "products") {
                res = await Products.findById(id)
            } else if (this.coll == "carts") {
                res = await Carts.findById(id)
            }
            return res
        } catch (e) {
            console.log(e);
        }
    };

    async getByTitle(title) {
        try {
            const res = await Products.findOne({ title: title }).exec()
            return res
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
            await Carts.findByIdAndUpdate(
                id,
                {
                    prods: carritosFiltrados
                }
            )
            console.log("producto borrado");
        } catch (e) {
            console.log(e);
        }
    };

    async deleteById(id) {
        try {
            if (this.coll == "products") {
                await Products.deleteOne({ _id: id })
            } else if (this.coll == "carts") {
                await Carts.deleteOne({ _id: id })
            }
            console.log("item borrado");
        } catch (e) {
            console.log(e);
        }
    };

    async deleteAll() {
        try {
            if (this.coll == "products") {
                await Products.deleteMany({})
            } else if (this.coll == "carts") {
                await Carts.deleteMany({})
            }
            console.log("se borraron todos los items");
        } catch (e) {
            console.log(e);
        }
    };

    async updateById(id, title, price, thumbnail, description, code, stock) {
        try {
            await Products.findByIdAndUpdate(
                id,
                {
                    title: title,
                    price: price,
                    thumbnail: thumbnail,
                    description: description,
                    code: code,
                    stock: stock
                }
            )
        } catch (error) {
            console.log(error);
        }
    };

};

export default ContainerMongo;