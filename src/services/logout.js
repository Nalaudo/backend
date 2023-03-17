import logger from '../config/logger.js';

class LogoutService {
    logoutReq = (req, res, email) => {
        req.logout(function (err) {
            if (err) logger.info(err);
            else res.render('pages/logout', { email });
        });
    }
}

const logoutService = new LogoutService()

export default logoutService