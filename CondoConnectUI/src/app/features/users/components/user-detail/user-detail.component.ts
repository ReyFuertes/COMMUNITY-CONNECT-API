import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { TimelineModule } from 'primeng/timeline';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, UserRole } from '../../models/user.model';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, TabsModule, CardModule, ButtonModule, AvatarModule, TagModule, AccordionModule, TimelineModule, ToggleSwitchModule, InputTextModule, FormsModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private userService: UserService = inject(UserService);

  public user: User | null = null;
  
  // Mock Data for UI Design
  public activityLog: {status: string, date: string, icon: string, color: string}[] = [
      { status: 'Gate Entry', date: '15/10/2025 10:30', icon: 'pi pi-arrow-right', color: '#9C27B0' },
      { status: 'Payment Received', date: '15/10/2025 14:00', icon: 'pi pi-wallet', color: '#673AB7' },
      { status: 'Login from New IP', date: '16/10/2025 16:15', icon: 'pi pi-globe', color: '#FF9800' }
  ];

  public ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
       this.userService.getById(id).subscribe((u: User) => this.user = u);
    }
  }

  public getRoleName(role: number): string {
      return UserRole[role];
  }
}
