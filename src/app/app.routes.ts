import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemasComponent } from './pages/temas/temas.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { ColaborativoComponent } from './pages/colaborativo/colaborativo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'temas', component: TemasComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'colaborativo', component: ColaborativoComponent },
];
