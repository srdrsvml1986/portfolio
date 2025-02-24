import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tr', component: HomeComponent},
  {path: 'en', component: HomeComponent},
  {path: ':language/proyectos', component: ArchiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
