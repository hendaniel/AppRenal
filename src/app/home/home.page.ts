import { Component } from "@angular/core";
import { HabitService } from "../Services/habit.service";
import { Habito } from "../models/resultado";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  habito: Habito;
  constructor(private habitService: HabitService) {
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
}
