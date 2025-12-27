export enum UserRole {
  SuperAdmin = 0,
  PropertyManager = 1,
  SecurityGuard = 2,
  Owner = 3,
  Tenant = 4
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdDate: Date;
  lastModifiedDate?: Date;
  optInToDirectory: boolean;
  showEmailInDirectory: boolean;
}

export interface CreateUserRequest extends Omit<User, 'id' | 'createdDate' | 'lastModifiedDate'> {
  password?: string;
}

export interface UpdateUserRequest extends Partial<Omit<User, 'createdDate' | 'lastModifiedDate'>> {
  id: string;
}
