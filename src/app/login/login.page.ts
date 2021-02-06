import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private faio:FingerprintAIO,private router:Router,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  login() {

    this.faio.show({
    //  clientId: 'Fingerprint-Demo',
     // clientsecret:'password',
     // localizedFallbackTitle: 'Use Pin',
     // localizedReason: 'Please authenticate'
    }).then(()=>{
      this.router.navigateByUrl('/home');
    })
    

  }

}
