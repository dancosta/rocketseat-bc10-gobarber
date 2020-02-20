import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found!' });
    }

    if (!user.checkPassowrd(password)) {
      return res.status(401).json({ error: 'Passowrd does not match' });
    }
  }
}

export default new SessionController();
