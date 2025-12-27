import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd, Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { PopoverModule } from 'primeng/popover';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { FloatingChatComponent } from './shared/components/floating-chat/floating-chat.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AvatarModule,
    BadgeModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    SelectModule,
    PopoverModule,
    TooltipModule,
    FormsModule,
    FloatingChatComponent,
    ConfirmDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public isSidebarCollapsed: boolean = false;
  public properties: { label: string, value: string }[] = [
    { label: 'Condo Alpha - Main', value: 'alpha' },
    { label: 'Condo Beta - South', value: 'beta' }
  ];
  public selectedProperty: string = 'alpha';
  public currentRouteLabel: string = 'Dashboard';
  public currentRouteColor: string = '#420D3F';

  public items: { label: string; icon: string; routerLink: string, color: string, badge?: string }[] = [
    { label: 'Dashboard', icon: 'pi pi-chart-line', routerLink: '/dashboard', color: '#4A90E2' },
    { label: 'Unit Management', icon: 'pi pi-building', routerLink: '/units', color: '#FF8C00' },
    { label: 'User Management', icon: 'pi pi-users', routerLink: '/users', color: '#5B7C99' },
    { label: 'Maintenance', icon: 'pi pi-wrench', routerLink: '/maintenance', color: '#6366F1', badge: '3' },
    { label: 'Finance', icon: 'pi pi-wallet', routerLink: '/finance', color: '#10B981' },
    { label: 'Security', icon: 'pi pi-shield', routerLink: '/security', color: '#EF4444' },
    { label: 'Bookings', icon: 'pi pi-calendar', routerLink: '/bookings', color: '#F59E0B', badge: '5' },
    { label: 'Documents', icon: 'pi pi-file', routerLink: '/documents', color: '#64748B', badge: '1' },
    { label: 'Engagement', icon: 'pi pi-heart', routerLink: '/engagement', color: '#EC4899', badge: '8' },
    { label: 'Support', icon: 'pi pi-comments', routerLink: '/support', color: '#198754', badge: '2' },
    { label: 'Reports', icon: 'pi pi-file-pdf', routerLink: '/reports', color: '#8E44AD' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings', color: '#94A3B8' }
  ];

  public notifications: { id: number, title: string, desc: string, time: string, icon: string, color: string }[] = [
    { id: 1, title: 'New Booking', desc: 'Unit 101 requested Amenities', time: '2 mins ago', icon: 'pi pi-calendar', color: '#FF8C00' },
    { id: 2, title: 'Security Alert', desc: 'Unauthorized entry attempt', time: '1 hour ago', icon: 'pi pi-shield', color: '#EF4444' },
    { id: 3, title: 'Payment Received', desc: 'Rent for Unit 402 processed', time: '3 hours ago', icon: 'pi pi-check-circle', color: '#50C878' }
  ];

  public toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const item = this.items.find(i => event.url.includes(i.routerLink));
      if (item) {
        this.currentRouteLabel = item.label;
        this.currentRouteColor = '#420D3F'; // Sticking with primary plum
      }
    });
  }
}
