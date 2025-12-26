import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DrawerModule } from 'primeng/drawer';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { loadUnits, deleteUnit } from '../../state/unit.actions';
import { selectAllUnits, selectUnitLoading } from '../../state/unit.selectors';
import { UnitStatus, Unit } from '../../models/unit.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unit-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, TagModule, DrawerModule, SelectModule, FormsModule],
  templateUrl: './unit-list.component.html',
  styleUrl: './unit-list.component.scss'
})
export class UnitListComponent implements OnInit {
  private store: Store = inject(Store);
  
  public units$: Observable<Unit[]> = this.store.select(selectAllUnits);
  public loading$: Observable<boolean> = this.store.select(selectUnitLoading);

  public visibleSidebar: boolean = false;
  public selectedUnit: Unit | null = null;

  // Mock Filters
  public buildings: {label: string, value: string}[] = [
      {label: 'Tower A', value: 'Tower A'},
      {label: 'Tower B', value: 'Tower B'}
  ];
  public selectedBuilding: string | null = null;

  public ngOnInit(): void {
    this.store.dispatch(loadUnits());
  }

  public onRowSelect(event: any): void {
      const unit = event.data || event; // Handle both event object and direct data
      if (!unit) return;
      this.selectedUnit = unit;
      this.visibleSidebar = true;
  }

  public delete(id: string, event: Event): void {
    event.stopPropagation();
    if(confirm('Are you sure you want to delete this unit?')) {
        this.store.dispatch(deleteUnit({ id }));
    }
  }

  public getStatusName(status: number): string {
      return UnitStatus[status];
  }

  public getStatusSeverity(status: number): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
      switch (status) {
          case UnitStatus.OwnerOccupied: return 'success';
          case UnitStatus.Tenanted: return 'warn'; 
          case UnitStatus.Vacant: return 'secondary';
          default: return undefined;
      }
  }
}