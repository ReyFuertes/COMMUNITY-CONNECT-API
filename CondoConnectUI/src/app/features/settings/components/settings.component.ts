import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SettingsActions from '../store/settings.actions';
import * as SettingsSelectors from '../store/settings.selectors';
import { Observable } from 'rxjs';
import { AppSettings } from '../models/settings.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  standalone: false
})
export class SettingsComponent implements OnInit {
  public appSettings$: Observable<AppSettings | null>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private store: Store) {
    this.appSettings$ = this.store.select(SettingsSelectors.selectAppSettings);
    this.loading$ = this.store.select(SettingsSelectors.selectSettingsLoading);
    this.error$ = this.store.select(SettingsSelectors.selectSettingsError);
  }

  public ngOnInit(): void {
    this.store.dispatch(SettingsActions.loadAppSettings());
  }
}
