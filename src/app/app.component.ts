import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transition, trigger, useAnimation } from '@angular/animations';
import { slideOverRouteAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':increment', [
        useAnimation(slideOverRouteAnimation, {
          params: {
            enter: 'translateX(-100%)',
            leave: 'translateX(200%)'
          }
        })
      ]),
      transition(':decrement', [
        useAnimation(slideOverRouteAnimation, {
          params: {
            enter: 'translateX(200%)',
            leave: 'translateX(-100%)'
          }
        })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';

  public prepareRoute(outlet: RouterOutlet): number {
    return outlet?.activatedRouteData?.routeAnimation;
  }
}
