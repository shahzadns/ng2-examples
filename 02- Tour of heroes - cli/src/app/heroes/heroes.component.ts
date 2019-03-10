import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    console.log('HeroesComponent: constructor:');
  }

  ngOnInit() {
    console.log('HeroesComponent: ngOnInit:');
    this.getHeroes();
  }

  onSelect(hero: Hero, $event: any, context: any): void {
    /* testing event info, and this context when function called from templates */
    console.log('HeroesComponent: onSelect:', hero, $event, context);
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
