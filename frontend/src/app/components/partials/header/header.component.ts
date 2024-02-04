import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
import { retry } from 'rxjs';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user!:User;
  constructor(private router: Router, private userService:UserService) {

    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })

  }

  navigateToMainPage() {
    this.router.navigate(['/']);
  }

  logout(){
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
