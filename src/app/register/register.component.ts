    
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  customer={
    name:'',
    email:'',
    password:'',
    phone:''
  }
  ngOnInit() {}
  addCustomer(){
    this.loginService.addCustomer(this.customer).subscribe(()=>{console.log('Done')})
  }
}