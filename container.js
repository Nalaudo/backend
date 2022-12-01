class Container {
    constructor(table) {
        this.table = table;
        this.base = undefined
        this.fields = undefined
        if (table == "products") {
            this.base = "mysql"
        } else if (table == "messages") {
            this.base = "sqlite"
        }
        else {
            console.log(`La tabla "${this.table}" no existe`)
        }
        const { options } = require(`./options/${this.base}`)
        this.knex = require("knex")(options);
    };

    createTable = () => {
        try {
            this.knex.schema
                .createTable(this.table, (table) => {
                    if (this.table == "products") {
                        table.increments("id"), table.string("title"), table.integer("price"), table.string("thumbnail")
                    } else if (this.table == "messages") {
                        table.increments("id"), table.string("email"), table.string("msgDate"), table.string("msg")
                    }
                })
                .then(() => {
                    console.log("Tabla creada.");
                })
                .catch((err) => {
                    console.log(err);
                    throw new Error(err);
                })
                .finally(() => {
                    this.knex.destroy();
                });
        } catch (e) {
            console.log(e);
        }

    };

    insertInTable = async (data) => {
        try {
            await this.knex(this.table).insert(data)
                .then((res) => {
                    console.log("Data agregada.", res);
                })
                .catch((err) => {
                    console.log(err);
                    throw new Error(err);
                })
            // .finally(() => {
            //     this.knex.destroy();
            // });
        } catch (e) {
            console.log(e);
        }

    };

    selectTable = async () => {
        try {
            const products = await this.knex.from(this.table).select("*")
                .then((res) => {
                    return res
                })
                .catch((err) => {
                    console.log(err);
                    throw new Error(err);
                })
            // .finally(() => {
            //     this.knex.destroy();
            // });
            if (products.length > 0) {
                return products
            } else {
                return []
            }
        } catch (e) {
            console.log(e);
        }
    };

    selectFromTableById = async (id) => {
        try {
            const product = await this.knex.from(this.table).where("id", "=", id)
                .select("title", "price", "thumbnail")
                .then((res) => {
                    return res
                })
                .catch((err) => {
                    console.log(err);
                    throw new Error(err);
                })
            // .finally(() => {
            //     knex.destroy();
            // });
            if (product.length > 0) {
                return product
            } else {
                return []
            }
        } catch (e) {
            console.log(e)
        }
    }

    updateFromTableById = async (id, title, price, thumbnail) => {
        try {
            await this.knex.from(this.table).where("id", "=", id)
                .update({ title: title, price: price, thumbnail: thumbnail })
                .then((res) => {
                    console.log("Item modificado", res);
                })
                .catch((err) => {
                    console.log(err);
                    throw new Error(err);
                })
            // .finally(() => {
            //     knex.destroy();
            // });
        } catch (e) {
            console.log(e)
        }

    };

    deleteFromTableById = async (id) => {
        try {
            await this.knex.from(this.table).where("id", "=", id)
                .del()
                .then((res) => {
                    console.log("Item borrado", res);
                })
                .catch((err) => {
                    console.log(err);
                    throw new Error(err);
                })
            // .finally(() => {
            //     knex.destroy();
            // });
        } catch (e) {
            console.log(e)
        }
    };

    deleteWholeTable = async () => {
        try {
            await this.knex.from(this.table).del()
                .then((res) => {
                    console.log("Todo borrado", res);
                })
                .catch((err) => {
                    console.log(err);
                    throw new Error(err);
                })
            // .finally(() => {
            //     knex.destroy();
            // });
        } catch (e) {
            console.log(e)
        }
    };

};

module.exports = Container;