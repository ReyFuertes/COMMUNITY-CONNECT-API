import { createAction, props } from '@ngrx/store';
import { Unit } from '../models/unit.model';

export const loadUnits = createAction(
  '[Unit List] Load Units'
);

export const loadUnitsSuccess = createAction(
  '[Unit API] Load Units Success',
  props<{ units: Unit[] }>()
);

export const loadUnitsFailure = createAction(
  '[Unit API] Load Units Failure',
  props<{ error: any }>()
);

export const createUnit = createAction(
  '[Unit Form] Create Unit',
  props<{ unit: Unit }>()
);

export const createUnitSuccess = createAction(
  '[Unit API] Create Unit Success',
  props<{ unit: Unit }>()
);

export const createUnitFailure = createAction(
  '[Unit API] Create Unit Failure',
  props<{ error: any }>()
);

export const updateUnit = createAction(
  '[Unit Form] Update Unit',
  props<{ unit: Unit }>()
);

export const updateUnitSuccess = createAction(
  '[Unit API] Update Unit Success',
  props<{ unit: Unit }>()
);

export const updateUnitFailure = createAction(
  '[Unit API] Update Unit Failure',
  props<{ error: any }>()
);

export const deleteUnit = createAction(
  '[Unit List] Delete Unit',
  props<{ unitId: string }>()
);

export const deleteUnitSuccess = createAction(
  '[Unit API] Delete Unit Success',
  props<{ unitId: string }>()
);

export const deleteUnitFailure = createAction(
  '[Unit API] Delete Unit Failure',
  props<{ error: any }>()
);

export const selectUnit = createAction(
  '[Unit List] Select Unit',
  props<{ unitId: string }>()
);

export const clearSelectedUnit = createAction(
  '[Unit Detail] Clear Selected Unit'
);
