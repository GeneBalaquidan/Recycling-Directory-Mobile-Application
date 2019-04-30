import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Tab1Root } from '../admin-pages';
import { Tab2Root } from '../admin-pages';
import { Tab3Root } from '../admin-pages';

@Component({
  selector: 'page-admin-tabs',
  templateUrl: 'admin-tabs.html'
})
export class AdminTabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;


  tab1Title = "AdminHome";
  tab2Title = "AdminSettings";
  tab3Title = "AdminAbout"

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['AdminHome'];
      this.tab2Title = values['AdminSettings'];
      this.tab3Title = values['AdminAbout'];
    });

  }
}
