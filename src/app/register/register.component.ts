import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private  router:  Router,private network: Network) { }
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

  ngOnInit() {}

  // register(form) {
  //   this.authService.register(form.value).subscribe((res) => {
  //     this.router.navigateByUrl('home');
  //   });
  // }
}
