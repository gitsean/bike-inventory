import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Bike } from './bike';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  bikes: FirebaseListObservable<any>;
  sizes = ['48', '50', '52', '54', '56', '58'];
  selectedBike = null;
  constructor(af: AngularFire) {
    this.bikes = af.database.list('/bikes');
  }
  updateBike(bike,key){
    console.log('Hi: ', bike)
    this.selectedBike = bike;
  }
  saveItem() {
    if(this.selectedBike.$key){
      var key = this.selectedBike.$key;
      delete this.selectedBike.$exists;
      delete this.selectedBike.$key;
      this.bikes.update(key, this.selectedBike);
    } else {
      this.bikes.push(this.selectedBike);
    }
    this.selectedBike = null;
  }
  addBike() {
    this.selectedBike = new Bike('','','','','','');
  }
  deleteItem(key: string) {    
    this.bikes.remove(key); 
  }
  // deleteEverything() {
  //   this.bikes.remove();
  // }
}