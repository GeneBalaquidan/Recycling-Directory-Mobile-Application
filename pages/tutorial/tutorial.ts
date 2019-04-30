import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { MainPage } from '../../pages/pages';

import { TranslateService } from '@ngx-translate/core';



export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService) {
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: 'Eco-saver',
            description: 'Ang application na ito ay naglalayon na matulungan ang mga tao para malaman kung saan ang malalapit na Junk Shop sa kanilang lugar.',
            image: 'assets/img/Earth/sad.jpg',
          },
          {
            title: 'Paano gumawa ng account at mag login?',
            description: 'Una: Mag sign-up, ilagay ang buong pangalan, username, email address, at password at i click ang sign-up button. \n Pangalawa: I-check ang email address na inilagay para sa verification email. \n Pangatlo: Mag login: Ilagay ang username at password na ginamit sa pag sign-up at i click ang login button.' ,
            image: 'assets/img/Earth/sad.jpg',
          },
          {
            title: 'Paano ito gamitin?',
            description: 'Una: Pumili ng kategorya ng iyong kalakal \n Pangalawa: Ilagay ang iyong lokasyon \n Pangatlo: Piliin ang napili mong Junk Shop na pupuntahan, ibubukas at i-se-set kusa sa Google Maps ang lokasyon na iyong inilagay at ang lokasyon ng gusto mong puntahan na Junk Shop',
            image: 'assets/img/Earth/sad.jpg',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot(MainPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

}
