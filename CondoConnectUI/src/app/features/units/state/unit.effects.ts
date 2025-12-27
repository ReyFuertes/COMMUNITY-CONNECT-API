import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UnitService } from '../services/unit.service';
import * as UnitActions from './unit.actions';

@Injectable()
export class UnitEffects {
  private actions$ = inject(Actions);
  private unitService = inject(UnitService);

  loadUnits$ = createEffect(() => this.actions$.pipe(
    ofType(UnitActions.loadUnits),
    mergeMap(() => this.unitService.getAll()
      .pipe(
        map(units => UnitActions.loadUnitsSuccess({ units })),
        catchError(error => of(UnitActions.loadUnitsFailure({ error: error.message })))
      ))
    )
  );

  createUnit$ = createEffect(() => this.actions$.pipe(
    ofType(UnitActions.createUnit),
    mergeMap(({ unit }) => this.unitService.create(unit)
      .pipe(
        map(newUnit => UnitActions.createUnitSuccess({ unit: newUnit })),
        catchError(error => of(UnitActions.createUnitFailure({ error: error.message })))
      ))
    )
  );

  updateUnit$ = createEffect(() => this.actions$.pipe(
    ofType(UnitActions.updateUnit),
    mergeMap(({ unit }) => this.unitService.update(unit.id, unit)
      .pipe(
        map(updatedUnit => UnitActions.updateUnitSuccess({ unit: updatedUnit })),
        catchError(error => of(UnitActions.updateUnitFailure({ error: error.message })))
      ))
    )
  );

  deleteUnit$ = createEffect(() => this.actions$.pipe(
    ofType(UnitActions.deleteUnit),
    mergeMap(({ unitId }) => this.unitService.delete(unitId)
      .pipe(
        map(() => UnitActions.deleteUnitSuccess({ unitId })),
        catchError(error => of(UnitActions.deleteUnitFailure({ error: error.message })))
      ))
    )
  );
}
