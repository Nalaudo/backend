const Products = require('../models/products');
const Users = require('../models/users');

class Cart {

    async findCart(user) {
        try {
            let res = await Users.findOne({ email: user.email });
            if (res.cart) {
                res = res.cart
            } else {
                res = undefined
            }
            return res;
        } catch (error) {
            console.log(error);
        };
    }

    async updateCart(user, newProds) {
        try {
            const cart = this.findCart(user);
            const newCart = [...cart, ...newProds];
            console.log(newCart)
            await Users.updateOne({ email: user.email }, { cart: newCart });
        } catch (error) {
            console.log(error);
        };
    }

    async findProdById(id) {
        try {
            const prod = await Products.findById(id).exec()
            console.log(prod)
            return prod;
        } catch (error) {
            console.log(error);
        };
    }


    async deleteOneProd(user, prodToDel) {
        try {
            const cart = this.findCart(user);
            function removeObjectWithId(arr, id) {
                ;
                const objWithIdIndex = arr.findIndex((obj) => obj._id === id);
                if (objWithIdIndex > -1) {
                    arr.splice(objWithIdIndex, 1);
                }
                return arr;
            }
            const newCart = removeObjectWithId(cart, prodToDel._id);
            const res = await Users.updateOne({ email: user.email }, { cart: newCart });
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCart(user) {
        try {
            const cart = [];
            const res = await Users.updateOne({ email: user.email }, { cart: cart });
            return res;
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = Cart;