import { Component, OnInit } from '@angular/core';
import { User } from '../login/user';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users : User = {
    Username: 'Username',     
    Password: 'Password',
    status:'status',
  };
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  add() {
    const rm = {
      //_id: event.newData._id,
      Username: this.users.Username,
      Password: this.users.Password,
     };
       this.service.addUser(rm).subscribe(
         (res) => {
           this.service.addUser(this.users);
         }
       );
   }
}
