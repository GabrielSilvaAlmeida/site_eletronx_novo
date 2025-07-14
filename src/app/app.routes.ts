import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HemodinamicaComponent } from './pages/hemodinamica/hemodinamica.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { PoliticaComponent } from './pages/politica/politica.component';

export const routes: Routes = [

      {
            path: '', redirectTo: 'home',
            pathMatch: 'full'
      },

      { path: 'home', component: HomeComponent },
      {
            path: 'sobre', component: SobreComponent
      },
      {
            path: 'servicos', component: ServicosComponent
      },
      {
            path: 'hemodinamica', component: HemodinamicaComponent
      },
      {
            path: 'produtos', component: ProdutosComponent
      },
      {
            path: 'termos', component: PoliticaComponent
      }
    
];
