import { Component } from '@angular/core';
import { HeaderComponent } from '../../fragments/header/header.component';
import { FooterComponent } from '../../fragments/footer/footer.component';

@Component({
  selector: 'app-hemodinamica',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './hemodinamica.component.html',
  styleUrl: './hemodinamica.component.scss'
})
export class HemodinamicaComponent {

}
