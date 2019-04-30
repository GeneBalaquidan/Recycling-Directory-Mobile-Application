import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { User } from '../../models/user';
import { MainPage } from '../../pages/pages';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {} as User;
  
  constructor( public translate: TranslateService,
    private fireAuth: AngularFireAuth,
    public navCtrl: NavController,
    private toast: ToastController,
    public modalCtrl: ModalController) {
  }

  async doLogin(user: User){
    if(user.email === undefined && user.password === undefined){
        this.toast.create({
          message: 'BLANK EMAIL AND PASSWORD, SERIOUSLY???',
          duration: 3000
        }).present();
    }else
    if(user.email === undefined){
        this.toast.create({
          message: 'NO EMAIL, REALLY?',
          duration: 3000
        }).present();
    }
    else
    if(user.password === undefined){
        this.toast.create({
          message: 'NO PASSWORD, REALLY?',
          duration: 3000
        }).present();
    }else
    {
      try{
        const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);

        this.toast.create({
          message: 'LOGIN SUCCESS!!!',
          duration: 3000
        }).present();

        if(info){
          await this.navCtrl.setRoot(MainPage);
        }
      }
      catch(e){
        console.error(e);
        this.toast.create({
          message: 'OOPS, SORRY, WRONG EMAIL OR PASSWORD!!!',
          duration: 3000
        }).present();
      }
    }
  }
}