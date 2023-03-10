const authMiddle = require('../middleware/auth');
const logger = require('../config/logger');

const logoutReq = (req, res, email) => {
    req.logout(function (err) {
        if (err) logger.info(err);
        else res.render('pages/logout', { email });
    });
}

module.exports = { logoutReq }