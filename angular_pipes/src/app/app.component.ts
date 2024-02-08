import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {interval} from 'rxjs';
import {map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'midterm1';
  presentDate = new Date(); 
  time$: Observable<Date>

  constructor() {
    this.time$ = interval(1000).pipe(
      map(() => new Date())
    ); 
  }

  price : number = 2000; ngOnInit() {
  }

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegrenate"];

  decimalNum1:number = 8.7589623;
  decimalNum2: number = 5.43;
}
