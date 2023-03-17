import Products from '../models/products.js';
import Messages from '../models/messages.js';
import Users from '../models/users.js';
import logger from '../../config/logger.js';

class ContainerMongo {
    constructor(coll) {
        this.coll = coll;
    };

    async getAll() {
        try {
            if (this.coll == "products") {
                return await Products.find({});
            } else if (this.coll == "messages") {
                return await Messages.find({});
            } else if (this.coll == "users") {
                return await Users.find({});
            };
        } catch (e) {
            logger.error(e);
        };
    };

    async save(item) {
        try {
            if (this.coll == "products") {
                let res = new Products(item);
                await res.save();
            } else if (this.coll == "messages") {
                let res = new Messages(item);
                await res.save();
            } else if (this.coll == "users") {
                let res = new Users(item);
                await res.save();
            };
        } catch (e) {
            logger.error(e);
        };
    }

    async getById(id) {
        try {
            if (this.coll == "products") {
                return await Products.findById(id);
            } else if (this.coll == "messages") {
                return await Messages.findById(id);
            };
        } catch (e) {
            logger.error(e);
        };
    };

    async getByTitle(title) {
        try {
            return await Products.findOne({ title: title }).exec();
        } catch (e) {
            logger.error(e);
        };
    };

    async getByCategory(category) {
        try {
            return await Products.findOne({ category: category }).exec();
        } catch (e) {
            logger.error(e);
        };
    }

    async getByEmail(email) {
        try {
            return await Users.findOne({ email: email }).exec();
        } catch (e) {
            logger.error(e);
        };
    };

    async deleteById(id) {
        try {
            if (this.coll == "products") {
                await Products.deleteOne({ _id: id });
            } else if (this.coll == "messages") {
                await Messages.deleteOne({ _id: id });
            } else if (this.coll == "users") {
                await Users.deleteOne({ _id: id });
            };
            logger.info("item borrado");
        } catch (e) {
            logger.error(e);
        };
    };

    async deleteAll() {
        try {
            if (this.coll == "products") {
                await Products.deleteMany({});
            } else if (this.coll == "messages") {
                await Messages.deleteMany({});
            } else if (this.coll == "users") {
                await Users.deleteMany({});
            };
            logger.info("se borraron todos los items");
        } catch (e) {
            logger.error(e);
        };
    };

    async updateById(id, title, price, thumbnail) {
        try {
            await Products.findByIdAndUpdate(
                id,
                {
                    title: title,
                    price: price,
                    thumbnail: thumbnail
                }
            );
        } catch (e) {
            logger.error(e);
        };
    };
};

export default ContainerMongo;