import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

/*
  Generated class for the PushNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushNotificationProvider {

  constructor(private oneSignal: OneSignal,private platform:Platform) {
  }

  initNotification() {
    if( this.platform.is('cordova') ) {
      this.oneSignal.startInit('5abd4832-9e3c-4450-a6a1-6621f20b4112', '958387707394');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      this.oneSignal.handleNotificationReceived().subscribe((data) => {
        console.log('Notification recivida',data);
      });
      this.oneSignal.handleNotificationOpened().subscribe((data) => {
        console.log('Notification abierta',data);
      });
      this.oneSignal.endInit();
    }
  }

}
