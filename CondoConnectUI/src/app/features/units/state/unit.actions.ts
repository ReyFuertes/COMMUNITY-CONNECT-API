import { createAction, props } from '@ngrx/store';
import { Unit, CreateUnitRequest, UpdateUnitRequest } from '../models/unit.model';

export const loadUnits = createAction('[Unit/API] Load Units');
export const loadUnitsSuccess = createAction('[Unit/API] Load Units Success', props<{ units: Unit[] }>());
export const loadUnitsFailure = createAction('[Unit/API] Load Units Failure', props<{ error: string }>());

export const createUnit = createAction('[Unit/API] Create Unit', props<{ unit: CreateUnitRequest }>());
export const createUnitSuccess = createAction('[Unit/API] Create Unit Success', props<{ unit: Unit }>());
export const createUnitFailure = createAction('[Unit/API] Create Unit Failure', props<{ error: string }>());

export const updateUnit = createAction('[Unit/API] Update Unit', props<{ unit: UpdateUnitRequest }>());
export const updateUnitSuccess = createAction('[Unit/API] Update Unit Success', props<{ unit: Unit }>());
export const updateUnitFailure = createAction('[Unit/API] Update Unit Failure', props<{ error: string }>());

export const deleteUnit = createAction('[Unit/API] Delete Unit', props<{ id: string }>());
export const deleteUnitSuccess = createAction('[Unit/API] Delete Unit Success', props<{ id: string }>());
export const deleteUnitFailure = createAction('[Unit/API] Delete Unit Failure', props<{ error: string }>());
