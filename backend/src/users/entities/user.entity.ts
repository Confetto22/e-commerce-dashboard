import { Exclude } from 'class-transformer';

export class User {
  id: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
