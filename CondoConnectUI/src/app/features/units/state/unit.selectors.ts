import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitState } from './unit.reducer';

export const selectUnitState = createFeatureSelector<UnitState>('units');

export const selectAllUnits = createSelector(
  selectUnitState,
  (state: UnitState) => state.units
);

export const selectSelectedUnitId = createSelector(
  selectUnitState,
  (state: UnitState) => state.selectedUnitId
);

export const selectSelectedUnit = createSelector(
  selectAllUnits,
  selectSelectedUnitId,
  (units, selectedUnitId) => units.find(unit => unit.id === selectedUnitId)
);

export const selectUnitsLoading = createSelector(
  selectUnitState,
  (state: UnitState) => state.loading
);

export const selectUnitsError = createSelector(
  selectUnitState,
  (state: UnitState) => state.error
);