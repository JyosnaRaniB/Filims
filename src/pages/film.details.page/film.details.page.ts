import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { LogoutPage } from "../Logout/logout";
import { LoginPage } from "../login/login";
import { IFilm } from "./films";
import { ApiProvider } from "../../providers/api/api";

//@IonicPage()
@Component({
  selector: 'page-film.details.page',
  templateUrl: 'film.details.page.html',
  })
export class FilmDetailsPage implements OnInit {
  film: IFilm;
 errorMessage: string;
 sub:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public apiProvider: ApiProvider) {
    //this.film = this.navParams.get('film');
  }


    ngOnInit() {

      this.film = this.navParams.get('film');


  /*  this.sub = this.apiProvider.params.subscribe(params => {
      let id = +params['id'];
      this.apiProvider.getFilm(id)   
                  .subscribe(
            film => this.film = film,
            error => this.errorMessage = <any>error);
    });
    */
  }
  doLogout() {
    let alert = this.alertCtrl.create({
      title:'Logged-Out Succesfully',
      subTitle:'Thank you',
      buttons:['OK']
    });
    alert.present();
   // this.auth.logout();
   this.navCtrl.setRoot(LoginPage);
 }
}