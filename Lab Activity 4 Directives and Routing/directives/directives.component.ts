import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  //Using ngIf to toggle text display
showText: boolean = false;
toggleText() {
    this.showText = !this.showText;
  }


//Image interpolation/binding
imageUrl:string="assets/logo.png"; 
imageW: number = 110;
imageH: number = 100;

//Using *ngIf
isLogIn:boolean=true; 
isLogOut:boolean=false; 

// *ngfor example 

staff = [ 
{ firstName: 'Joseph', lastName: 'Diaz', email: 'joseph.diaz@test.com', role: 'User' },   
{ firstName: 'James', lastName: 'Reynolds', email: 'james.reynolds@test.com', role: 'Admin' }, 
{ firstName: 'Djoan', lastName: 'Jaworski', email: 'djoan.jaworski@test.com', role: 'Admin' }, 
{ firstName: 'Maria', lastName: 'Garcia', email: 'maria.garcia@test.com', role: 'User' }, 
{ firstName: 'Jay', lastName: 'Bernardo', email: 'jay.bernardo@test.com', role: 'User' } 
];

// Another *ngfor example 
products = [
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 1', price: '$40.00 - $80.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 2', price: '$50.00 - $90.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
  // Add more product items as needed
];


}
