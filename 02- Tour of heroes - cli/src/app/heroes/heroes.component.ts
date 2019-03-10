import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
    console.log('HeroesComponent: constructor:');
  }

  ngOnInit() {
    console.log('HeroesComponent: ngOnInit:');
  }

  onSelect(hero: Hero, $event: any, context: any): void {
    /* testing event info, and this context when function called from templates */
    console.log('HeroesComponent: onSelect:', hero, $event, context);
    this.selectedHero = hero;
  }

}
