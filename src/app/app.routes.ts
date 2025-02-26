import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: '/tr', pathMatch: 'full'},
  {
    path: ':language',
    children: [
      {path: '', component: HomeComponent},
    ]
  },
  {path: '**', redirectTo: ''},
];