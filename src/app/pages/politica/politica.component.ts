import { Component } from '@angular/core';
import { HeaderComponent } from '../../fragments/header/header.component';
import { FooterComponent } from '../../fragments/footer/footer.component';

@Component({
  selector: 'app-politica',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './politica.component.html',
  styleUrl: './politica.component.scss'
})
export class PoliticaComponent {

}
