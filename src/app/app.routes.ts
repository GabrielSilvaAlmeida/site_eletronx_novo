import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HemodinamicaComponent } from './pages/hemodinamica/hemodinamica.component';

export const routes: Routes = [

      { path: 'home', component: HomeComponent },
      {
            path: 'sobre', component: SobreComponent
      },
      {
            path: 'servicos', component: ServicosComponent
      },
      {
            path: 'hemodinamica', component: HemodinamicaComponent
      }
    
];
