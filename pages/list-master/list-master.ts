import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { WelcomePage } from '../welcome/welcome';
import { TranslateService } from '@ngx-translate/core';
import { Items } from '../../providers/providers';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Item } from '../../models/item';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  currentItems: Item[];
  profileData : FirebaseObjectObservable<Profile>

  constructor(private toast: ToastController, private fireAuth: AngularFireAuth,
             private fireDB: AngularFireDatabase, public translate: TranslateService,
             public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  signout(){
    this.navCtrl.setRoot(WelcomePage);
    window.location.reload();

  }

  ionViewWillLoad(){
    this.fireAuth.authState.take(1).subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: 'Welcome to Eco-saver, ${data.email}',
          duration: 3000
        }).present();

        this.profileData = this.fireDB.object(`profile/${data.uid}`)
      }
      else{
        this.toast.create({
          message: 'Could not find authentication details!!!',
          duration: 3000
        }).present();
      }
    })
  }

  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
