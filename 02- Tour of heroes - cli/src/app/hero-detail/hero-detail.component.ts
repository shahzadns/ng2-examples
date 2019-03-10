import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  //receive info from parent to child via property binding
  @Input() hero: Hero;

  constructor() {
    console.log('HeroDetailComponent: constructor:');
  }

  ngOnInit() {
    console.log('HeroDetailComponent: ngOnInit:');
  }

}
