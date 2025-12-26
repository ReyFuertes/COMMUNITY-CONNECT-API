import { createReducer, on } from '@ngrx/store';
import { Unit, UnitStatus } from '../models/unit.model';
import * as UnitActions from './unit.actions';

export interface UnitState {
  units: Unit[];
  loading: boolean;
  error: string | null;
}

export const initialState: UnitState = {
  units: [
    {
      id: '1',
      name: 'Tower A, Unit 101',
      status: UnitStatus.OwnerOccupied,
      address: '123 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-01-01')
    },
    {
      id: '2',
      name: 'Tower A, Unit 402',
      status: UnitStatus.Tenanted,
      address: '123 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-02-15')
    },
    {
      id: '3',
      name: 'Tower B, Unit 505',
      status: UnitStatus.Vacant,
      address: '125 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-03-10')
    },
    {
      id: '4',
      name: 'Tower B, Unit 808',
      status: UnitStatus.OwnerOccupied,
      address: '125 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-04-05')
    },
    {
      id: '5',
      name: 'Tower C, Unit 1201',
      status: UnitStatus.Tenanted,
      address: '127 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      createdDate: new Date('2024-05-20')
    }
  ],
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
  on(UnitActions.deleteUnitSuccess, (state, { id }) => ({
    ...state,
    units: state.units.filter(u => u.id !== id)
  }))
);