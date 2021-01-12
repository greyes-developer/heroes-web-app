import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
})
export class HeroeComponent {
  boolDC: boolean = true;
  imgDC: string = "assets/img/dc.png";
  imgMarvel: string = "assets/img/marvel.png";

  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroesService.getHeroe(params["id"]);
    });
  }
}
