import { createReducer, on } from '@ngrx/store';
import { Unit, UnitStatus } from '../models/unit.model';
import * as UnitActions from './unit.actions';

export interface UnitState {
  units: Unit[];
  selectedUnitId: string | null;
  loading: boolean;
  error: string | null;
}

export const initialState: UnitState = {
  units: [
    {
      id: '1',
      unitNumber: '101',
      name: 'Tower A, Unit 101',
      building: 'Tower A',
      floor: 1,
      squareFootage: 800,
      beds: 1,
      baths: 1,
      rentPrice: 1500,
      address: '123 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-01-01'),
      status: UnitStatus.OwnerOccupied,
      ownerName: 'Alice Smith',
      ownerContact: 'alice@example.com',
    },
    {
      id: '2',
      unitNumber: '402',
      name: 'Tower A, Unit 402',
      building: 'Tower A',
      floor: 4,
      squareFootage: 1200,
      beds: 2,
      baths: 2,
      rentPrice: 2000,
      address: '123 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-02-15'),
      status: UnitStatus.Tenanted,
      ownerName: 'Bob Johnson',
      ownerContact: 'bob@example.com',
      tenantName: 'Charlie Brown',
      tenantContact: 'charlie@example.com',
    },
    {
      id: '3',
      unitNumber: '505',
      name: 'Tower B, Unit 505',
      building: 'Tower B',
      floor: 5,
      squareFootage: 1000,
      beds: 2,
      baths: 1,
      rentPrice: undefined,
      address: '125 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-03-10'),
      status: UnitStatus.Vacant,
      ownerName: 'David Lee',
      ownerContact: 'david@example.com',
    },
    {
      id: '4',
      unitNumber: '808',
      name: 'Tower B, Unit 808',
      building: 'Tower B',
      floor: 8,
      squareFootage: 1500,
      beds: 3,
      baths: 2,
      rentPrice: 2500,
      address: '125 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-04-05'),
      status: UnitStatus.OwnerOccupied,
      ownerName: 'Eve Davis',
      ownerContact: 'eve@example.com',
    },
    {
      id: '5',
      unitNumber: '1201',
      name: 'Tower C, Unit 1201',
      building: 'Tower C',
      floor: 12,
      squareFootage: 900,
      beds: 1,
      baths: 1,
      rentPrice: 1600,
      address: '127 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-05-20'),
      status: UnitStatus.Tenanted,
      ownerName: 'Frank White',
      ownerContact: 'frank@example.com',
      tenantName: 'Grace Green',
      tenantContact: 'grace@example.com',
    }
  ],
  selectedUnitId: null,
  loading: false,
  error: null
};
export const unitReducer = createReducer(
  initialState,
  on(UnitActions.loadUnits, state => ({ ...state, loading: false })),
  on(UnitActions.loadUnitsSuccess, (state, { units }) => ({ ...state, units: units.length > 0 ? units : state.units, loading: false })),
  on(UnitActions.loadUnitsFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(UnitActions.createUnitSuccess, (state, { unit }) => ({ ...state, units: [...state.units, unit] })),
  on(UnitActions.updateUnitSuccess, (state, { unit }) => ({
    ...state,
    units: state.units.map(u => u.id === unit.id ? unit : u)
  })),
  on(UnitActions.deleteUnitSuccess, (state, { unitId }) => ({
    ...state,
    units: state.units.filter(u => u.id !== unitId),
    selectedUnitId: state.selectedUnitId === unitId ? null : state.selectedUnitId
  })),
);