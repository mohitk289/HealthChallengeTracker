import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';
import { AddUserComponent } from './components/add-user/add-user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'workout-chart', component: WorkoutChartComponent },
  { path: 'add-user', component: AddUserComponent }
];
