import { NgModule } from'@angular/core';
import { BrowserModule } from'@angular/platform-browser';
import { RouterModule, Routes } from'@angular/router'; // Import RouterModule and Routesimport { AppComponent } from'./app.component';
import { HeaderComponent } from'./header/header.component';
import { FooterComponent } from'./footer/footer.component';
import { HomeComponent } from'./home/home.component';
import { DownloadComponent } from'./download/download.component';
import { MediaComponent } from'./media/media.component';
import { NewsComponent } from'./news/news.component';
import { SignInComponent } from'./sign-in/sign-in.component';
import { SignUpComponent } from'./sign-up/sign-up.component';
import { StoreComponent } from'./store/store.component';

constroutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'media', component: MediaComponent },
  { path: 'news', component: NewsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'store', component: StoreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DownloadComponent,
    MediaComponent,
    NewsComponent,
    SignInComponent,
    SignUpComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Add RouterModule with routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
exportclassAppModule { }
