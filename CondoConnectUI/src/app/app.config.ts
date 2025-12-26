import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { userReducer } from './features/users/state/user.reducer';
import { unitReducer } from './features/units/state/unit.reducer';
import { UserEffects } from './features/users/state/user.effects';
import { UnitEffects } from './features/units/state/unit.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({ 
        theme: {
            preset: Aura
        }
    }),
    provideStore({ users: userReducer, units: unitReducer }),
    provideEffects([UserEffects, UnitEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};