/**
 * Created by Shahzad on 4/17/16.
 */

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <a [routerLink]="['Heroes']">Heroes</a>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])

export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private _heroService: HeroService) {

  }
}