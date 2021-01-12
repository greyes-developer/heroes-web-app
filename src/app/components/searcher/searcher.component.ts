import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: "app-searcher",
  templateUrl: "./searcher.component.html",
})
export class SearcherComponent implements OnInit {
  termino: string;
  heroes: Heroe[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params["termino"];
      this.heroes = this._heroesService.searchHeroes(this.termino);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(["/heroe", idx]);
  }
}
