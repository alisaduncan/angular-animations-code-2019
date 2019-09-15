import { animate, animation, query, style } from '@angular/animations';

export const slideOverRouteAnimation = animation([
  query(':enter',
    style({
      position: 'fixed',
      height: '100%',
      width: '100%',
      transform: '{{ enter }}',
      opacity: 0
    }),
    { optional: true }),

  // slide out
  query(':leave', [
    style({
      position: 'fixed',
      height: '100%',
      width: '100%',
      transform: 'none',
    }),
    animate('500ms ease-in',
      style({
        // opacity: 0,
        transform: '{{ leave }}'
      })
    )
  ], { optional: true }),

  // slide in
  query(':enter',
    animate('500ms ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0%)'
      })
    ), { optional: true }),
]);
