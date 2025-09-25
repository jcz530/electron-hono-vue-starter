import type { Context } from 'hono';
import type { User, ApiResponse } from '../../shared/types/api';

export type HonoContext = Context;

export interface UserService {
  getUsers(): User[];
  getUserById(_id: number): User | undefined;
  createUser(_user: Omit<User, 'id'>): User;
}

export type ApiHandler<T = unknown> = (
  _c: HonoContext
) => Response | Promise<Response> | ApiResponse<T> | Promise<ApiResponse<T>>;
