import { Component, OnInit } from '@angular/core';
import { user } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  usuario: user;
  constructor() { 
    this.usuario = new user();
  }

  ngOnInit() {
  }

}
