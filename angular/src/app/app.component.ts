import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './scss/global.scss']
})
export class AppComponent {
  title = 'Machine Learning App';

  constructor(private router: Router) {
  }
}
