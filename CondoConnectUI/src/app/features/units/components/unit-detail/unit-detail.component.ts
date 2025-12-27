import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../../models/unit.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSelectedUnit } from '../../state/unit.selectors';
import { clearSelectedUnit } from '../../state/unit.actions';
import { AppState } from '@app/store';

@Component({
  selector: 'app-unit-detail',
  standalone: false,
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {
  selectedUnit$: Observable<Unit | undefined>;

  constructor(private store: Store<AppState>) {
    this.selectedUnit$ = this.store.select(selectSelectedUnit);
  }

  ngOnInit(): void {
  }

  closeSidebar(): void {
    this.store.dispatch(clearSelectedUnit());
  }

  getStatusName(status: number): string {
    // Implement logic to return status name based on status number
    return `Status ${status}`;
  }

  getStatusSeverity(status: number): string {
    // Implement logic to return severity based on status number
    return 'info';
  }
}
