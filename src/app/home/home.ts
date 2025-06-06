
// import {Component, inject} from '@angular/core';
// import {CommonModule} from '@angular/common';
// import { HousingLocationInfo } from '../housinglocationinfo';
// import { HousingLocationComponent } from '../housing-location/housing-location';
// import {HousingService} from '../housing';
// @Component({
//   selector: 'app-home',
//   imports: [CommonModule, HousingLocationComponent],
//   template: `
//     <section>
//       <form>
//         <input
//   type="text"
//   placeholder="Filter by city"
//   (input)="filterResults($event)"
// />

//         <button class="primary" type="button">Search</button>
//       </form>
//     </section>
//     <section class="results">
//       <app-housing-location
//         *ngFor="let housingLocation of filteredLocationList"
//         [housingLocation]="housingLocation"
//       ></app-housing-location>
//     </section>
//   `,
//   styleUrls: ['./home.css'],
// })
// export class Home {
//   housingLocationList: HousingLocationInfo[] = [];
//   housingService: HousingService = inject(HousingService);
//   filteredLocationList: HousingLocationInfo[] = [];
//   constructor() {
//     this.housingLocationList = this.housingService.getAllHousingLocations();
//     this.filteredLocationList = this.housingLocationList;
//   }
//   filterResults(event: Event) {
//   const value = (event.target as HTMLInputElement).value;
//   this.filteredLocationList = value
//     ? this.housingLocationList.filter(location =>
//         location.city.toLowerCase().includes(value.toLowerCase())
//       )
//     : this.housingLocationList;
// }

// }

import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousingLocationInfo } from '../housinglocationinfo';
import { HousingLocationComponent } from '../housing-location/housing-location';
import {HousingService} from '../housing';
@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInfo[] = [];
  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}