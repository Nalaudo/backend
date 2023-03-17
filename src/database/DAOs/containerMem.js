import logger from '../../config/logger.js';

class ContainerMem {
    constructor(coll) {
        this.coll = coll;
        this.products = []
        this.messages = []
        this.users = []
    };

    getAll() {
        try {
            if (this.coll == "products") {
                return this.products;
            } else if (this.coll == "messages") {
                return this.messages;
            } else if (this.coll == "users") {
                return this.users;
            };
        } catch (e) {
            logger.error(e);
        };
    };

    save(item) {
        try {
            const id = (arr, item) => {
                const id = arr.length === 0 ? 1 : arr[arr.length - 1].id + 1;
                item.id = id;
                return item
            }
            if (this.coll == "products") {
                return this.products.push(id(this.products, item));
            } else if (this.coll == "messages") {
                return this.messages.push(id(this.messages, item));
            } else if (this.coll == "users") {
                return this.users.push(id(this.users, item))
            };
        } catch (e) {
            logger.error(e);
        };
    }

    getById(id) {
        try {
            if (this.coll == "products") {
                return this.products.find(({ prod }) => prod.id === id);
            } else if (this.coll == "messages") {
                return this.messages.find(({ msg }) => msg.id === id);
            };
        } catch (e) {
            logger.error(e);
        };
    };

    getByTitle(title) {
        try {
            return this.products.find(({ prod }) => prod.title === title);
        } catch (e) {
            logger.error(e);
        };
    };

    getByCategory(category) {
        try {
            return this.products.find(({ prod }) => prod.category === category);
        } catch (e) {
            logger.error(e);
        };
    };

    getByEmail(email) {
        try {
            return this.users.find(({ user }) => user.email === email);
        } catch (e) {
            logger.error(e);
        };
    };

    deleteById(id) {
        try {
            const filtered = async () => {
                const arr = this.getAll();
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

    deleteAll() {
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

    updateById(id, title, price, thumbnail) {
        try {
            const products = this.getAll();
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

export default ContainerMem;