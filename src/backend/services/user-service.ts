import type { User } from '../../shared/types/api';
import type { UserService } from '../types/api';

class UserServiceImpl implements UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  createUser(userData: Omit<User, 'id'>): User {
    const newUser: User = {
      id: Math.max(...this.users.map(u => u.id)) + 1,
      ...userData,
    };
    this.users.push(newUser);
    return newUser;
  }
}

export const userService = new UserServiceImpl();
