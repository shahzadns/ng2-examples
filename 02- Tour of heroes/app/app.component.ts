/**
 * Created by Shahzad on 4/17/16.
 */

import {Component} from 'angular2/core';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <my-heroes></my-heroes>
  `,
  directives: [HeroesComponent],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private _heroService: HeroService) {

  }
}