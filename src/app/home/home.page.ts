import { Component } from "@angular/core";
import { HabitService } from "../Services/habit.service";
import { Habito } from "../models/resultado";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  habito: Habito;
  constructor(
    private habitService: HabitService,
    private social: SocialSharing
  ) {
    this.habitService.getHabit().subscribe(res => {
      this.habito = res;
    });
  }

  newHabit() {
    console.log("Generando nuevo habito...");
    this.habito = null;
    this.habitService.getHabit().subscribe(res => {
      this.habito = res;
    });
  }

  shareFacebook() {
    this.social.shareViaFacebook(
      this.habito.informacion,
      this.habito.imagen,
      "https://www.apprenal.com.co"
    );
    this.print("FACEBOOK");
  }

  shareTwitter() {
    this.social.shareViaTwitter(
      "Habito #" + this.habito.number + "\n" + this.habito.informacion,
      this.habito.imagen,
      "https://www.apprenal.com.co"
    );
    this.print("TWITTER");
  }

  shareWhatsapp() {
    this.social.shareViaWhatsApp(
      "Habito #" + this.habito.number + "\n" + this.habito.informacion,
      this.habito.imagen,
      "https://www.apprenal.com.co"
    );
    this.print("WHATSAPP");
  }

  print(app) {

    console.log(app);
    console.log(
      "Habito #" + this.habito.number + "\n" + this.habito.informacion,
      this.habito.imagen,
      "https://www.apprenal.com.co"
    );
  }
}
