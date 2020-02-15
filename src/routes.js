import Router from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

//  Create user route.
routes.post('/users', UserController.store);

export default routes;
