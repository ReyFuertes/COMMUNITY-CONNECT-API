import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitState } from './unit.reducer';

export const selectUnitState = createFeatureSelector<UnitState>('units');

export const selectAllUnits = createSelector(
  selectUnitState,
  (state: UnitState) => state.units
);

export const selectUnitLoading = createSelector(
  selectUnitState,
  (state: UnitState) => state.loading
);

export const selectUnitError = createSelector(
  selectUnitState,
  (state: UnitState) => state.error
);
