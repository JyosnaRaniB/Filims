import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';

//import {FilmDetailsPage} from '../film-details-page/film-details-page';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LogoutPage } from "../Logout/logout";
import { FilmDetailsPage } from "../film.details.page/film.details.page";
import { LoginPage } from "../login/login";
import { ApiProvider } from "../../providers/api/api";
import { IFilm } from "../film.details.page/films";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

//films: Observable<any>;
//products:Observable<any>;
imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    films: IFilm[];


  constructor(public navCtrl: NavController, public http: Http,public alertCtrl: AlertController, public apiProvider: ApiProvider) {

  /** this.films = this.http.get('http://swapi.co/api/films').map(res => res.json());
    this.films=this.http.get('assets/filmdetails.json');
    this.films
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })

     //this.films = this.apiProvider.getFilms();  */
  }
  
ngOnInit(): void {
           this.apiProvider.getFilms()
                     .subscribe(
                       films => this.films = films,
                       error =>  this.errorMessage = <any>error);
    }

 openDetails(film) {
  // this.navCtrl.setRoot(FilmDetailsPage, {film: film});
   this.navCtrl.push(FilmDetailsPage, {film: film});
  }
   doLogout() {
   // this.auth.logout();
let alert = this.alertCtrl.create({
      title:'Logged-Out Succesfully',
      subTitle:'Thank you',
      buttons:['OK']
    });
    alert.present();
   this.navCtrl.setRoot(LoginPage);
 }
}
