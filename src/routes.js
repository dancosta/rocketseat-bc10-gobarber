import Router from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Dan Costa',
    email: 'dancosta@gmail.com',
    password_hash: 'qualquercoisa',
  });

  res.send({ created_user: user });
});

export default routes;
