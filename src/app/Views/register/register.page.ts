import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombre    : string;
  correo    : string;
  fecha     : string;
  contrasena: string;

  constructor(public services: UserService) { }

  ngOnInit() {
  }

  register(){
    this.services.registro(this.nombre, this.correo, this.fecha, this.contrasena).subscribe(result =>{
      console.log(result);
      var message = JSON.parse(JSON.stringify(result));
      if(message.status == "ok"){
        // DECIR CHIDO
        console.log("REGISTRADO");
      }else{
        // INFORMAR ERROR
        console.error("ERROR AL REGISTRAR")
      }
    });
  }

}
