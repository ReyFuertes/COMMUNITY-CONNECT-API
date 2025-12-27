import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SettingsActions from './settings.actions';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class SettingsEffects {
  private actions$ = inject(Actions);
  private settingsService = inject(SettingsService);

  loadAppSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.loadAppSettings),
      mergeMap(() =>
        this.settingsService.getAll().pipe(
          map((settings) => SettingsActions.loadAppSettingsSuccess({ settings: settings[0] || null })), // Assuming single settings object
          catchError((error) => of(SettingsActions.loadAppSettingsFailure({ error })))
        )
      )
    )
  );
}
