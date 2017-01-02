import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule }   from '@angular/forms';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBF3jdGiJMY044YvDn4nQYerxZYPeASzlo",
    authDomain: "angular-fire-test-b7f68.firebaseapp.com",
    databaseURL: "https://angular-fire-test-b7f68.firebaseio.com",
    storageBucket: "angular-fire-test-b7f68.appspot.com",
    messagingSenderId: "272687709504"

};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}