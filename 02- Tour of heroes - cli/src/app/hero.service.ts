import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
    console.log('HeroService: constructor:');
  }

  getHeroes(): Observable<Hero[]> {

    // returns a resolved (onetime emit based) observable
    return of(HEROES);
  }

}
