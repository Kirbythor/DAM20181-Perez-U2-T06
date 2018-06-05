import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteService } from '../../services/quote';

/**
 * Generated class for the DeportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deportes',
  templateUrl: 'deportes.html',
})
export class DeportesPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public quotes: QuoteService) {

      this.quotes.getQuotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeportesPage');
  }

}
