import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

import { QuoteService } from '../../services/quote';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public email: any = {
    cadena: ''
  };

  public exceptionn: boolean = false;

  constructor(public navCtrl: NavController, public quotes: QuoteService) {
    this.quotes.getQuotes();
  }


  LogIn(): void {

    if (this.email.cadena == this.quotes.data.mail) {
      this.navCtrl.push(PerfilPage);
    }
    else{
      this.exceptionn = true;
      console.log("Este correo es incorrecto");
    }

  }
}
