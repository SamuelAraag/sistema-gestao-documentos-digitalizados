import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SGDD';

  aoClicarAcessar() {
    window.alert("Funcionalidade ainda não implementada. Estamos trabalhando nisso.");
  }
}
