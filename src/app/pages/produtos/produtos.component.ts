import { Component } from '@angular/core';
import { HeaderComponent } from '../../fragments/header/header.component';
import { FooterComponent } from '../../fragments/footer/footer.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

}
