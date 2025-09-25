import type { Context } from 'hono';
import type { User, ApiResponse } from '../../shared/types/api';

export type HonoContext = Context;

export interface UserService {
  getUsers(): User[];
  getUserById(id: number): User | undefined;
  createUser(user: Omit<User, 'id'>): User;
}

export type ApiHandler<T = unknown> = (
  c: HonoContext
) => Response | Promise<Response> | ApiResponse<T> | Promise<ApiResponse<T>>;
