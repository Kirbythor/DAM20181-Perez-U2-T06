import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeportesPage } from '../deportes/deportes';
import { QuoteService } from '../../services/quote';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {


  public url:string;
  public nombre:string;
  public correo:string;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public quotes:QuoteService) {
  
      this.quotes.getQuotes();
      this.nombre=quotes.data.name;
      this.correo=quotes.data.mail;

  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    console.log(this.nombre);
  }

  SportsIn():void{
    this.navCtrl.push(DeportesPage);
  }

}
