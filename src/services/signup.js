import logger from '../config/logger.js';

class SignupService {
    signupCheck = (req, res, email) => {
        if (req.isAuthenticated()) {
            res.redirect('/profile');
        } else {
            res.render('pages/signup', { email });
        }
    }
}

const signupService = new SignupService()

export default signupService