import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
	userData: any;
	  constructor( translate: TranslateService, public navCtrl: NavController, private facebook: Facebook) { }

	  login() {
	    this.navCtrl.setRoot(LoginPage);
	  }

	  signup() {
	    this.navCtrl.setRoot(SignupPage);
	  }

  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
  }
}
