import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 users : User = {
    Username: 'Username',     
    Password: 'Password',
    status:'status',
  };
  username:String;
  password:String;
  event: any;
  constructor( private service: UserService, private router: Router  )  
  {
    this.service.getData().subscribe((res) => {
      if (res.success) {
       this.users = res.data;
       console.log(res.data);
     }
   }); 
  }
   
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    console.log(target);
     this.username = target.querySelector('#username').value;
     this.password = target.querySelector('#password').value;
    console.log(this.username);
    console.log(this.password);
      if( this.username.indexOf("Tea") > -1 ){
       
      this.router.navigate(["home"]); 
    }else if( this.username.indexOf("Stud") > -1){
      
      this.router.navigate(["studenthome"]);
    }
  }
   ngOnInit(): void {
   }


}