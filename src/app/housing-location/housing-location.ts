// // import { Component, input } from '@angular/core';
// // import { HousingLocationInfo } from '../housinglocationinfo';

// // @Component({
// //   selector: 'app-housing-location',
// //   standalone: true,
// //   imports: [],
// //   template: `
// //     <div class="card">
// //       <img [src]="housingLocation().photo" alt="{{ housingLocation().name }}" />
// //       <h2>{{ housingLocation().name }}</h2>
// //       <p>{{ housingLocation().city }}, {{ housingLocation().state }}</p>
// //     </div>
// //   `,
// //   styleUrls: ['./housing-location.css'],
// // })
// // export class HousingLocationComponent {
// //   housingLocation = input.required<HousingLocationInfo>();
// // }

// import {Component, input} from '@angular/core';
// import {HousingLocationInfo} from '../housinglocationinfo';
// @Component({
//   selector: 'app-housing-location',
//   template: `
//     <section class="listing">
//       <img
//         class="listing-photo"
//         [src]="housingLocation().photo"
//         alt="Exterior photo of {{ housingLocation().name }}"
//         crossorigin
//       />
//       <h2 class="listing-heading">{{ housingLocation().name }}</h2>
//       <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
//     </section>
//   `,
//   styleUrls: ['./housing-location.css'],
// })
// export class HousingLocationComponent {
//   housingLocation = input.required<HousingLocationInfo>();
// }

import {Component, input} from '@angular/core';
import {HousingLocationInfo} from '../housinglocationinfo';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
      <a [routerLink]="['/details', housingLocation().id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.css'],
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocationInfo>();
}