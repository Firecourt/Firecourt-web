import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){

  }
  title = 'Firecourt Corp';
}
