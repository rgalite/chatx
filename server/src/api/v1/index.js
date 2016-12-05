import { Router } from 'express';
import * as users from './users';
import * as rooms from './rooms';
import auth from '../../auth';

export default () => {
  let api = Router();

  // Public paths
  api.post('/users/login', users.login)
  api.post('/users', users.create);

  // Protected resources
  api.get('/users/:id', auth, users.show);
  api.get('/rooms/:id', auth, rooms.show);
  api.post('/rooms/:id/join', auth, rooms.join);

  return api;
}
