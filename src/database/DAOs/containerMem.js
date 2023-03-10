const logger = require('../../config/logger');

class ContainerMem {
    constructor(coll) {
        this.coll = coll;
        this.products = []
        this.messages = []
        this.users = []
    };

    async getAll() {
        try {
            let res = undefined;
            if (this.coll == "products") {
                res = this.products;
            } else if (this.coll == "messages") {
                res = this.messages;
            } else if (this.coll == "users") {
                res = this.users;
            };
            return res;
        } catch (e) {
            logger.error(e);
        };
    };

    async save(item) {
        try {
            let res = undefined;
            const id = (arr, item) => {
                const id = arr.length === 0 ? 1 : arr[arr.length - 1].id + 1;
                item.id = id;
                return item
            }
            if (this.coll == "products") {
                res = this.products.push(id(this.products, item));
            } else if (this.coll == "messages") {
                res = this.messages.push(id(this.messages, item));
            } else if (this.coll == "users") {
                res = this.users.push(id(this.users, item))
            };
        } catch (e) {
            logger.error(e);
        };
    }

    async getById(id) {
        try {
            let res = undefined
            if (this.coll == "products") {
                res = this.products.find(({ prod }) => prod.id === id);
            } else if (this.coll == "messages") {
                res = this.messages.find(({ msg }) => msg.id === id);
            };
            return res;
        } catch (e) {
            logger.error(e);
        };
    };

    async getByTitle(title) {
        try {
            const res = this.products.find(({ prod }) => prod.title === title);
            return res;
        } catch (e) {
            logger.error(e);
        };
    };

    async getByEmail(email) {
        try {
            const res = this.users.find(({ user }) => user.email === email);
            return res;
        } catch (e) {
            logger.error(e);
        };
    };

    async deleteById(id) {
        try {
            const filtered = async () => {
                const arr = await this.getAll();
                return arr.filter((e) => e.id != id);
            }
            if (this.coll == "products") {
                this.products.push(filtered())
            } else if (this.coll == "messages") {
                this.messages.push(filtered())
            } else if (this.coll == "users") {
                this.users.push(filtered())
            };
            logger.info("item borrado");
        } catch (e) {
            logger.error(e);
        };
    };

    async deleteAll() {
        try {
            if (this.coll == "products") {
                this.products = [];
            } else if (this.coll == "messages") {
                this.messages = [];
            } else if (this.coll == "users") {
                this.users = [];
            };
            logger.info("se borraron todos los items");
        } catch (e) {
            logger.error(e);
        };
    };

    async updateById(id, title, price, thumbnail) {
        try {
            const products = await this.getAll();
            const item = products.find((prod) => prod.id == id);
            if (item) {
                item.title = title;
                item.price = price;
                item.thumbnail = thumbnail;
                this.products.push(item)
            } else {
                return { error: "Producto no encontrado" };
            }
        } catch (error) {
            logger.error(e);
        }
    };
};

module.exports = ContainerMem;