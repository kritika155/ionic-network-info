import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    console.log('network was disconnected :-(');
  });
  constructor(private http:HttpClient,private network: Network) { }
  private customerUrl = 'http://192.168.1.30:3000/api/customers';
  private loginUrl = 'http://192.168.1.30:3000/api/login';

  

  addCustomer(customer):Observable<any>{
    return this.http.post(this.customerUrl,customer);
  }
  login(data){
    return this.http.post(this.loginUrl,data);
  }
}