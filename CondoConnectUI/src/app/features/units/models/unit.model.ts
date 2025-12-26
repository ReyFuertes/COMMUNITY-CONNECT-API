export enum UnitStatus {
  OwnerOccupied = 0,
  Tenanted = 1,
  Vacant = 2
}

export interface Unit {
  id: string;
  name: string;
  status: UnitStatus;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  createdDate: Date;
  lastModifiedDate?: Date;
}

export interface CreateUnitRequest {
  name: string;
  status: UnitStatus;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface UpdateUnitRequest {
  id: string;
  name: string;
  status: UnitStatus;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}
