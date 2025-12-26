import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UserListComponent } from './features/users/components/user-list/user-list.component';
import { UserDetailComponent } from './features/users/components/user-detail/user-detail.component';
import { UnitListComponent } from './features/units/components/unit-list/unit-list.component';
import { MaintenanceComponent } from './features/maintenance/maintenance.component';
import { FinanceComponent } from './features/finance/finance.component';
import { SecurityComponent } from './features/security/security.component';
import { BookingsComponent } from './features/bookings/bookings.component';
import { DocumentsComponent } from './features/documents/documents.component';
import { EngagementComponent } from './features/engagement/engagement.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: 'units', component: UnitListComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: 'finance', component: FinanceComponent },
    { path: 'security', component: SecurityComponent },
    { path: 'bookings', component: BookingsComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'engagement', component: EngagementComponent }
];