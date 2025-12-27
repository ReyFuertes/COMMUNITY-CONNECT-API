import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UnitActions from '../../store/unit.actions';
import * as UnitSelectors from '../../store/unit.selectors';
import { UnitStatus, Unit } from '../../models/unit.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TableRowSelectEvent } from 'primeng/table'; // Import TableRowSelectEvent
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrl: './unit-list.component.scss',
  standalone: false
})
export class UnitListComponent implements OnInit {
  public units$: Observable<Unit[]>;
  public loading$: Observable<boolean>;

  public visibleSidebar: boolean = false;
  public selectedUnit: Unit | null = null;

  // Mock Filters
  public buildings: { label: string, value: string }[] = [
    { label: 'Tower A', value: 'Tower A' },
    { label: 'Tower B', value: 'Tower B' }
  ];
  public selectedBuilding: string | null = null;
  public unitStatusEnum: typeof UnitStatus = UnitStatus; // Expose enum to template

  constructor(private store: Store, private router: Router, private confirmationService: ConfirmationService) {
    this.units$ = this.store.select(UnitSelectors.selectAllUnits);
    this.loading$ = this.store.select(UnitSelectors.selectUnitLoading);
  }

  public ngOnInit(): void {
    this.store.dispatch(UnitActions.loadUnits());
  }

  public onRowSelect(event: TableRowSelectEvent<Unit>): void {
    if (!event.data) {
      return;
    }
    this.selectedUnit = event.data as Unit; // Explicitly cast to Unit
    this.visibleSidebar = true;
  }

  public onDelete(id: string, event: Event): void {
    event.stopPropagation();
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this unit?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.store.dispatch(UnitActions.deleteUnit({ id }));
      }
    });
  }

  public getStatusName(status: UnitStatus): string {
    return UnitStatus[status];
  }

  public getStatusSeverity(status: UnitStatus): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
    switch (status) {
      case UnitStatus.OwnerOccupied: return 'success';
      case UnitStatus.Tenanted: return 'warn';
      case UnitStatus.Vacant: return 'secondary';
      default: return undefined;
    }
  }

  public navigateToUnitDetail(unitId: string): void {
    this.router.navigate(['/units', unitId]);
  }
}