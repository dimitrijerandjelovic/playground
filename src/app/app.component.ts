import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilepickerComponent } from './components/filepicker/filepicker.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, FilepickerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}

export type ColumnType = 'id' | 'first' | 'last' | 'account';
