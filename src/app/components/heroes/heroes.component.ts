import { Component, OnInit } from "@angular/core";
import { Heroe, HeroesService } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private _heroesServices: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroe(idx: number) {
    this.router.navigate(["/heroe", idx]);
  }
}