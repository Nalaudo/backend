const Conatiner = require('../container');
const users = new Conatiner("users")

async function auth(req, res, next) {
    const getUsr = await users.getByUname(req.session.user)
    const user = getUsr != null ? getUsr : undefined
    if (req.session?.user === user?.uname && req.session?.psw == user?.psw && req.session?.user != undefined && req.session?.psw != undefined) {
        return next()
    }
    return res.status(401).redirect('/login')
}

module.exports = { auth }