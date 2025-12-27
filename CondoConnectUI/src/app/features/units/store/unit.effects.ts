import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UnitActions from './unit.actions';
import { UnitService } from '../services/unit.service';

@Injectable()
export class UnitEffects {
  private actions$ = inject(Actions);
  private unitService = inject(UnitService);

  loadUnits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UnitActions.loadUnits),
      mergeMap(() =>
        this.unitService.getAll().pipe(
          map((units) => UnitActions.loadUnitsSuccess({ units })),
          catchError((error) => of(UnitActions.loadUnitsFailure({ error })))
        )
      )
    )
  );

  addUnit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UnitActions.addUnit),
      mergeMap(({ unit }) =>
        this.unitService.create(unit).pipe(
          map((newUnit) => UnitActions.addUnitSuccess({ unit: newUnit })),
          catchError((error) => of(UnitActions.addUnitFailure({ error })))
        )
      )
    )
  );

  updateUnit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UnitActions.updateUnit),
      mergeMap(({ unit }) =>
        this.unitService.update(unit.id, unit).pipe(
          map((updatedUnit) => UnitActions.updateUnitSuccess({ unit: updatedUnit })),
          catchError((error) => of(UnitActions.updateUnitFailure({ error })))
        )
      )
    )
  );

  deleteUnit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UnitActions.deleteUnit),
      mergeMap(({ id }) =>
        this.unitService.delete(id).pipe(
          map(() => UnitActions.deleteUnitSuccess({ id })),
          catchError((error) => of(UnitActions.deleteUnitFailure({ error })))
        )
      )
    )
  );
}
