import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  ngOnInit() {}

  constructor(private network: Network) { }
  networkInfo={
    status:''
  }
  disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    console.log('network was disconnected :-(');
    this.networkInfo.status='Disconnected'

  });
  connectSubscription = this.network.onConnect().subscribe(() => {
    console.log('network connected!');
    this.networkInfo.status='Connected';
    //localStorage.setItem('NetworkStatus', JSON.stringify(this.networkInfo.status));

    setTimeout(() => {
      if (this.network.type === 'wifi') {
        console.log('we got a wifi connection, woohoo!');
      }
    }, 3000);
  });

}
