import { importProvidersFrom } from'@angular/core';
import { RouterModule } from'@angular/router';
import { HeaderComponent } from'./header/header.component';
import { FooterComponent } from'./footer/footer.component';
import { HomeComponent } from'./home/home.component';

import { MediaComponent } from'./media/media.component';
import { NewsComponent } from'./news/news.component';
import { SignInComponent } from'./sign-in/sign-in.component';
import { SignUpComponent } from'./sign-up/sign-up.component';
import { StoreComponent } from'./store/store.component';
import { routes } from './app.routes';
import { ApplicationConfig } from '@angular/core';

// Configuration functions or constants can be defined here if needed.
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    // Include any other providers you need here
  ]
};
