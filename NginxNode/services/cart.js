const cart = require('../database/cart')
const logger = require('../src/config/logger');

const deleteCart = async (user) => {
    return await cart.deleteCart(user)
}

const findProdUpdateCart = async (id, user) => {
    const arr = []
    const prod = await cart.findProdById(id)
    arr.push(prod)
    return await cart.updateCart(user, arr)
}

const getCart = async (user) => {
    return await cart.findCart(user)
}


module.exports = { deleteCart, findProdUpdateCart, getCart }