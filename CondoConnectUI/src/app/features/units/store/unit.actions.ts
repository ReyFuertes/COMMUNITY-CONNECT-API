import { createAction, props } from '@ngrx/store';
import { Unit, CreateUnitRequest, UpdateUnitRequest } from '../models/unit.model';

export const loadUnits = createAction('[Unit List] Load Units');

export const loadUnitsSuccess = createAction(
  '[Unit API] Load Units Success',
  props<{ units: Unit[] }>()
);

export const loadUnitsFailure = createAction(
  '[Unit API] Load Units Failure',
  props<{ error: any }>()
);

export const addUnit = createAction(
  '[Unit Form] Add Unit',
  props<{ unit: CreateUnitRequest }>()
);

export const addUnitSuccess = createAction(
  '[Unit API] Add Unit Success',
  props<{ unit: Unit }>()
);

export const addUnitFailure = createAction(
  '[Unit API] Add Unit Failure',
  props<{ error: any }>()
);

export const updateUnit = createAction(
  '[Unit Form] Update Unit',
  props<{ unit: UpdateUnitRequest }>()
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
  props<{ id: string }>()
);

export const deleteUnitSuccess = createAction(
  '[Unit API] Delete Unit Success',
  props<{ id: string }>()
);

export const deleteUnitFailure = createAction(
  '[Unit API] Delete Unit Failure',
  props<{ error: any }>()
);