import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { UserListComponent } from '../users/components/user-list/user-list.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, TabsModule, UserListComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
