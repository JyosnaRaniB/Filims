import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from "../home/home";

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
showLogin:boolean = true;
username:string = '';
password:string = '';
name:string = '';
  constructor(public navCtrl: NavController,public loadingCtrl:LoadingController,public alertCtrl: AlertController) {}
  ionViewDidLoad() {
  console.log('Hello LoginPage Page');
}

doLogin(){

if(this.showLogin) {
  console.log('process login');

  if(this.username === '' || this.password === '') {
    let alert = this.alertCtrl.create({
      title:'Login Error',
      subTitle:'All fields are rquired',
      buttons:['OK']
    });
    alert.present();
    return;
  }

  let loader = this.loadingCtrl.create({
    content: "Logging in..."
  });
//loader.present();

 if(this.username=='admin'&& this.password=='nimda'){
 loader.dismissAll();
 this.navCtrl.setRoot(HomePage);
 }
else{
  let errors = 'Invalid details';
  loader.dismissAll();
  let alert = this.alertCtrl.create({
    title:'Login Error',
    subTitle:errors,
    buttons:['OK']
    });
  alert.present();
  loader.dismissAll();
  }
}


}

}
