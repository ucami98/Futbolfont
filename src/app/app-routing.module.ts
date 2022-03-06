import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { TablaPosicionesComponent } from './components/tabla-posiciones/tabla-posiciones.component';
import { Team1Component } from './components/team1/team1.component';
import { Team2Component } from './components/team2/team2.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'equipos', component: EquiposComponent},
  { path: 'tabla', component: TablaPosicionesComponent},
  { path: 'teamLocal', component: Team1Component},
  { path: 'teamVisitante', component: Team2Component},
  {
    path: '**',
    redirectTo: 'equipos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
