import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comparation',
  templateUrl: './comparation.page.html',
  styleUrls: ['./comparation.page.scss'],
})
export class ComparationPage implements OnInit {
  
  id1 : string;
  id2 : string;

  constructor(private activateroute : ActivatedRoute) {

    this.id1 = this.activateroute.snapshot.paramMap.get('id_uno');
    console.log("Primer producto: " + this.id1);
    this.id2 = this.activateroute.snapshot.paramMap.get('id_dos');
    console.log("Comparar con: " + this.id1);
  }

  ngOnInit() {
  }

}
