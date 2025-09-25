import { Hono } from 'hono';
import { userService } from '../services/user-service';
import type { ApiHandler } from '../types/api';
import type { User } from '../../shared/types/api';

const users = new Hono();

const getUsers: ApiHandler<User[]> = c => {
  const allUsers = userService.getUsers();
  return c.json(allUsers);
};

const getUserById: ApiHandler<User> = c => {
  const id = parseInt(c.req.param('id'));
  const user = userService.getUserById(id);

  if (!user) {
    return c.json({ error: 'User not found' }, 404);
  }

  return c.json(user);
};

const createUser: ApiHandler<User> = async c => {
  const userData = await c.req.json();

  if (!userData.name || !userData.email) {
    return c.json({ error: 'Name and email are required' }, 400);
  }

  const newUser = userService.createUser(userData);
  return c.json(newUser, 201);
};

users.get('/', getUsers);
users.get('/:id', getUserById);
users.post('/', createUser);

export default users;
