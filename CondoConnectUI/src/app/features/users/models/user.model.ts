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

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: UserRole;
  isActive: boolean;
  optInToDirectory: boolean;
  showEmailInDirectory: boolean;
}

export interface UpdateUserRequest {
  id: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  optInToDirectory: boolean;
  showEmailInDirectory: boolean;
}
