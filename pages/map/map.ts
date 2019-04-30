import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition } from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  
    map: any;
    image: any;

  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController, public platform: Platform) {
    const that = this;
    setTimeout(function() {
        that.googleMap();
    },2000)
   }

  googleMap(){
   this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: 15, lng: 120}
        });

        this.image = 'assets/Earth/mark.png';
        let beachMarker = new google.maps.Marker({
          position: {lat: 15.4482526, lng: 120.9370316},
          map: this.map,
          icon: this.image,
          
        });
  }


}