import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { NavController } from '@ionic/angular';
import { SearchPage } from 'src/app/search/search.page';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: user;
  correo: string;
  password: string;
  constructor(public navCtrl: NavController, public servicios: UserService) { 
  }

  login(){
      this.servicios.login(this.correo,this.password).subscribe(result => {
        if(result.error != null) 
      });
      this.navCtrl.navigateForward('/search');
  }
  register(){
    this.navCtrl.navigateForward('/register');
  }
  ngOnInit() {
  }

}
