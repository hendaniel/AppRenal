import { Component, OnInit } from '@angular/core';
import { user } from '../models/user';
import { UserService } from '../Services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  usuario: user;
  constructor(private userServices: UserService, private nav: NavController) { 
    this.usuario = this.userServices.getUser();
  }

  ngOnInit() {
  }

  logout(){
    console.log("logout Clicked");
    this.userServices.logout();
    this.nav.navigateRoot("/login");
  }

}
