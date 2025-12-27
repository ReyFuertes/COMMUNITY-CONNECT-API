import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
    { path: 'units', loadChildren: () => import('./features/units/units.module').then(m => m.UnitsModule) },
    { path: 'maintenance', loadChildren: () => import('./features/maintenance/maintenance.module').then(m => m.MaintenanceModule) },
    { path: 'finance', loadChildren: () => import('./features/finance/finance.module').then(m => m.FinanceModule) },
    { path: 'security', loadChildren: () => import('./features/security/security.module').then(m => m.SecurityModule) },
    { path: 'bookings', loadChildren: () => import('./features/bookings/bookings.module').then(m => m.BookingsModule) },
    { path: 'documents', loadChildren: () => import('./features/documents/documents.module').then(m => m.DocumentsModule) },
    { path: 'reports', loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule) },
    { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
    { path: 'engagement', loadChildren: () => import('./features/engagement/engagement.module').then(m => m.EngagementModule) },
    { path: 'support', loadChildren: () => import('./features/support/support.module').then(m => m.SupportModule) }
];