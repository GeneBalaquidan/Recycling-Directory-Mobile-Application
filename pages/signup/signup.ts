import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';
import { Profile } from '../../models/profile';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {
  user = {} as User;
  profile = {} as Profile;
  
    constructor(public navCtrl: NavController,
    public toast: ToastController,
    private fireAuth: AngularFireAuth,
    private fireDB: AngularFireDatabase,
    public translate: TranslateService,
    public modalCtrl: ModalController) {
   
  }


 async doSignup(user: User, profile: Profile) {
   if(user.email === undefined){

      if(this.translate.getDefaultLang() === 'en')
      {
          this.toast.create({
            message: 'PLEASE MAKE SURE THE EMAIL YOU ENTERED IS CORRECT!',
            duration: 3000
          }).present();
      }else
      {
        this.toast.create({
            message: 'SIGURADUHING TAMA ANG IYONG INILAGAY NA EMAIL!',
            duration: 3000
          }).present();
      }
    }else
    if(user.password === undefined){
        this.toast.create({
          message: 'YUNG PASSWORD MO, GAGO!!',
          duration: 3000
        }).present();
    }
    else{
   if(profile.firstName === undefined){
        this.toast.create({
          message: 'TANG INA MO, SINO KA!??',
          duration: 3000
        }).present();
    }else
   if(profile.lastName === undefined){
        this.toast.create({
          message: 'TANG INA MO, SINO KA!??',
          duration: 3000
        }).present();
    }else
    try{
        const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

        if(info){

            this.fireAuth.authState.take(1).subscribe(auth => {
            this.fireDB.object(`profile/${auth.uid}`).set(this.profile)
          })
          this.navCtrl.setRoot(LoginPage);
        }
      }
      catch(e){
      console.error(e);
      }
    }
  }
}
