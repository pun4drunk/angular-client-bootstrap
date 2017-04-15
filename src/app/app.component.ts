import { Component } from '@angular/core';

const MODULES: string[] = [
  'people',
  'portfolio',
  'about',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modules = MODULES;
}
