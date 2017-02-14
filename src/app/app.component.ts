import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [ NavComponent ]
})

export class AppComponent {}
