import { Component } from '@angular/core';
import { NavbarComponent } from './products-app/navbar/navbar.component';
import { ProductsListComponent } from './products-app/products-list/products-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ProductsListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-labs';
}
