import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { MainPage } from '../../pages/pages';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	profile = {} as Profile;

  constructor(private fireAuth: AngularFireAuth, private fireDB: AngularFireDatabase,  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  createProfile(){
  	this.fireAuth.authState.take(1).subscribe(auth => {
  		this.fireDB.object(`profile/${auth.uid}`).set(this.profile)
  		.then(() => this.navCtrl.setRoot(MainPage));
  	})
  }

}
