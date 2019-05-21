import { Component, OnInit } from "@angular/core";
import { UserService } from "../../Services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { user } from "src/app/models/user";
import { Dieta } from "../../models/dieta";
import { ToastController, NavController } from "@ionic/angular";
import { Propiedad } from "../../models/propiedad";
import { ProductService } from "../../Services/product.service";

@Component({
  selector: "app-new-diet",
  templateUrl: "./new-diet.page.html",
  styleUrls: ["./new-diet.page.scss"]
})
export class NewDietPage implements OnInit {
  usuario: user;
  dieta: Dieta;
  listaPropiedades: Propiedad[];

  constructor(
    private userService: UserService,
    private router: Router,
    private toast: ToastController,
    private productService: ProductService
  ) {
    this.usuario = this.userService.getUser();
    this.dieta = new Dieta();
    this.listaPropiedades = new Array();
    this.removeUsed();
    this.listaPropiedades.sort((x, y) => {
      return x.nombre.localeCompare(y.nombre+"");
    });
  }

 async crearDieta() {
    if (this.dieta.meta != null && this.dieta.meta != 0 && this.dieta.propiedad != null) {
      await this.userService.addDietaService(this.dieta).subscribe(res => {
        this.userService.pushDieta(res);
        this.mensaje("Dieta agregada con exito!");
        this.router.navigate(["/diets"]);
      });
    } else {
      this.mensaje("La meta debe ser mayor que cero.");
    }
  }

  ionViewWillEnter(){
    this.dieta = new Dieta();
    this.listaPropiedades = new Array();
    this.removeUsed();
    this.listaPropiedades.sort((x, y) => {
      return x.nombre.localeCompare(y.nombre+"");
    });
  }


  async mensaje(mensaje: string) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 1000,
      position: "top",
      animated: true,
    });
    toast.present();
  }


  removeUsed(){
    let list: Propiedad[] = this.productService.getNamesPropiedades();
    let comp: number[] = new Array();
    this.usuario.dietas.forEach(e => comp.push(e.propiedad.id));
    comp = comp.sort((x,y)=>{return x - y;});
    
    console.log(comp);
    
    this.listaPropiedades = new Array();

    let i = 0, n = comp.length;
    list.forEach(e =>{
      if(i < n)
        if(e.id != comp[i])
          this.listaPropiedades.push(e);
        else{
          console.log(i);
          i++;
        }
      else
        this.listaPropiedades.push(e);
    });

    console.log(this.listaPropiedades);
    
  }
  ngOnInit() {}
}
