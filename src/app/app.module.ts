import { NgModule } from'@angular/core';
import { BrowserModule } from'@angular/platform-browser';
import { RouterModule } from'@angular/router';
import { AppComponent } from'./app.component';
import { HeaderComponent } from'./header/header.component';
import { FooterComponent } from'./footer/footer.component';
import { HomeComponent } from'./home/home.component';
import { DownloadComponent } from'./download/download.component';
import { MediaComponent } from'./media/media.component';
import { NewsComponent } from'./news/news.component';
import { SignInComponent } from'./sign-in/sign-in.component';
import { SignUpComponent } from'./sign-up/sign-up.component';
import { StoreComponent } from'./store/store.component';
import { routes } from'./app.routes';
import { bootstrapApplication } from '@angular/platform-browser';

@NgModule({
  declarations: [


    DownloadComponent,
    MediaComponent,
    NewsComponent,
    SignInComponent,
    SignUpComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configure RouterModule with routes
  ],
  providers: [],


// ...

 // Bootstrap the Angular application with the AppComponent
})


export class AppModule { }
