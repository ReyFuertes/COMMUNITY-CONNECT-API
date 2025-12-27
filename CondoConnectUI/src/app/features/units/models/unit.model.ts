export enum UnitStatus {
  OwnerOccupied = 0,
  Tenanted = 1,
  Vacant = 2,
}

export interface Unit {
  id: string;
  unitNumber: string;
  name: string;
  building: string;
  floor: number;
  squareFootage: number;
  beds: number;
  baths: number;
  rentPrice?: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  createdDate: Date;
  status: UnitStatus;
  ownerName: string;
  ownerContact: string;
  tenantName?: string;
  tenantContact?: string;
}

export interface CreateUnitRequest extends Omit<Unit, 'id'> {}

export interface UpdateUnitRequest extends Partial<Omit<Unit, 'id'>> {
  id: string;
}