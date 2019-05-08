import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  data={
    email:'',
    password:''
  }
  networkChange=false;
  networkInfo={
    status:''
  }
  disconnectSubscription:any;
  connectSubscription:any;
  
  constructor(private loginService:LoginService,private network: Network) { }

  ngOnInit() {
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.networkInfo.status='Network was disconnected';
      this.networkChange=true;

    });
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.networkInfo.status='Connected'
      this.networkChange=true;

      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });
  }
  
    
  
  login(details){
    this.loginService.login(details).subscribe((result)=>{
      localStorage.setItem('user',JSON.stringify(result));
      console.log(result)
    })
  }

}