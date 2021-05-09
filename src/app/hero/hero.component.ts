import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  @Output() deleteHero: EventEmitter<Hero> = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(hero: Hero): void {
    this.deleteHero.emit(hero);
  }
}
