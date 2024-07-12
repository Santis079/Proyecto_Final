import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements AfterViewInit {
  slideIndex: number = 0;
  cantDinero: number = 0;
  slides = document.getElementsByClassName(
    'imageneSlider'
  ) as HTMLCollectionOf<HTMLElement>;
  dots = document.getElementsByClassName(
    'puntos'
  ) as HTMLCollectionOf<HTMLElement>;

  showDivs() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(' blanco', '');
    }

    this.slideIndex++;
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }
    this.slides[this.slideIndex - 1].style.display = 'flex';
    this.dots[this.slideIndex - 1].className += ' blanco';
  }

  carousel() {
    this.showDivs();
    setTimeout(() => this.carousel(), 5000); // Cambia la imagen cada 5 segundos
  }

  moverImg(n: number) {
    this.slideIndex += n - 1;
    const slides = document.getElementsByClassName('imageneSlider');
    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0;
    }
    if (this.slideIndex < 0) {
      this.slideIndex = slides.length - 1;
    }
    this.showDivs();
  }

  mostrarImg(n: number) {
    this.slideIndex = n - 1;
    this.showDivs();
  }

  ngAfterViewInit() {
    this.carousel();
    this.initSlider();
  }

  initSlider() {
    const input = document.getElementById(
      'filtroDinero'
    ) as HTMLInputElement | null;
    if (input) {
      input.addEventListener('input', () => this.mostrarDinero(input));
    }
  }

  mostrarDinero(input: HTMLInputElement) {
    const dinero = input.value;
    this.cantDinero = parseFloat(dinero);
    const mostrarValor = document.getElementById('mostrarValor');
    if (mostrarValor) {
      mostrarValor.textContent = dinero;
    }
  }
}
