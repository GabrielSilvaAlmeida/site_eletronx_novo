import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

import { HeaderComponent } from '../../fragments/header/header.component';
import { FooterComponent } from '../../fragments/footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  numero = 0;
  numero2 = 0;
  private jaComecou = false;

  @ViewChild('contador', { static: true }) contadorEl!: ElementRef;

 ngAfterViewInit() {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !this.jaComecou) {
        this.jaComecou = true;
        this.iniciarContagem();
        this.iniciarContagem2();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(this.contadorEl.nativeElement);
  } else {
 
    this.iniciarContagem();
  }
}




  iniciarContagem() {
    const intervalo = setInterval(() => {
      if (this.numero < 340) {
        this.numero++;
      } else {
        clearInterval(intervalo);
      }
    }, 10);
  }

  iniciarContagem2() {
    const intervalo = setInterval(() => {
    if(this.numero2 <40) {
      this.numero2++;

    }
    else {
      clearInterval(intervalo);
    }
  }, 50);
}


textoOriginal: string = `Sabemos que a manutenção dos equipamentos médicos é fundamental para o funcionamento seguro e eficiente de qualquer unidade de saúde. Por isso, a EletronX investe continuamente em capacitação técnica, laboratórios equipados e ferramentas de última geração para oferecer um serviço de manutenção altamente qualificado.
A empresa realiza manutenção preventiva, corretiva e preditiva, além de atualizações de software e calibrações conforme normas técnicas e exigências da Anvisa. Tudo isso com rapidez, transparência e suporte técnico especializado, assegurando a continuidade dos serviços médicos e evitando interrupções que possam comprometer a saúde dos pacientes.`;

textoReduzido: string = '';
textoCompleto: string = '';
mostrarTextoCompleto: boolean = false;
mostrarBotaoToggle: boolean = false;

ngOnInit() {
  this.textoCompleto = this.textoOriginal;
  if (this.textoOriginal.length > 500) {
    this.textoReduzido = this.textoOriginal.substring(0, 300);
    this.mostrarBotaoToggle = true;
  } else {
    this.textoReduzido = this.textoOriginal;
  }
}

alternarTexto() {
  this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
}
}



