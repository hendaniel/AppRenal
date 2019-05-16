import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.page.html',
  styleUrls: ['./diets.page.scss'],
})
export class DietsPage implements OnInit {

  constructor(private services: UserService) {
    console.log(this.services.getUser());
    
   }

  ngOnInit() {
  }

}
