import logger from '../config/logger.js';

class LoginService {
    loginCheck = (req, res, email) => {
        if (req.isAuthenticated()) {
            return res.redirect('/profile');
        } else {
            return res.render('pages/login', { email });
        }
    }
}

const loginService = new LoginService()

export default loginService