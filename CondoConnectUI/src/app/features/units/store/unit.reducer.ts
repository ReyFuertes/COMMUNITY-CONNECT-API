import { createReducer, on } from '@ngrx/store';
import * as UnitActions from './unit.actions';
import { Unit } from '../models/unit.model';

export interface UnitState {
  units: Unit[];
  loading: boolean;
  error: any;
}

export const initialState: UnitState = {
  units: [],
  loading: false,
  error: null,
};

export const unitReducer = createReducer(
  initialState,

  on(UnitActions.loadUnits, (state) => ({ ...state, loading: true, error: null })),
  on(UnitActions.loadUnitsSuccess, (state, { units }) => ({ ...state, units, loading: false })),
  on(UnitActions.loadUnitsFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(UnitActions.addUnit, (state) => ({ ...state, loading: true, error: null })),
  on(UnitActions.addUnitSuccess, (state, { unit }) => ({ ...state, units: [...state.units, unit], loading: false })),
  on(UnitActions.addUnitFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(UnitActions.updateUnit, (state) => ({ ...state, loading: true, error: null })),
  on(UnitActions.updateUnitSuccess, (state, { unit }) => ({
    ...state,
    units: state.units.map((u) => (u.id === unit.id ? unit : u)),
    loading: false,
  })),
  on(UnitActions.updateUnitFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(UnitActions.deleteUnit, (state) => ({ ...state, loading: true, error: null })),
  on(UnitActions.deleteUnitSuccess, (state, { id }) => ({
    ...state,
    units: state.units.filter((u) => u.id !== id),
    loading: false,
  })),
  on(UnitActions.deleteUnitFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
