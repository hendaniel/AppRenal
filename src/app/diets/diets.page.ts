import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Dieta } from '../models/dieta';
import { user } from '../models/user';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.page.html',
  styleUrls: ['./diets.page.scss'],
})
export class DietsPage implements OnInit {

  dietas : Dieta[];
  usuario : user;
  constructor(private service: UserService) {
    console.log(this.service.getUser());
    this.usuario = this.service.getUser();
    this.dietas = this.usuario.dietas;
    console.log(this.dietas);
    
   }

  ngOnInit() {
  }

}
