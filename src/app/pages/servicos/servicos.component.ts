import { Component } from '@angular/core';
import { HeaderComponent } from '../../fragments/header/header.component';
import { FooterComponent } from '../../fragments/footer/footer.component';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

}
