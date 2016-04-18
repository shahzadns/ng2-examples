/**
 * Created by Shahzad on 4/15/16.
 */

import {Injectable} from 'angular2/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()

export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 1000) // 1 seconds
    );
  }

  getHero(id: number) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}