import { Routes } from'@angular/router';
import { HomeComponent } from'./home/home.component';
import { SignInComponent } from'./sign-in/sign-in.component';
import { SignUpComponent } from'./sign-up/sign-up.component';
import { StoreComponent } from'./store/store.component';
import { DownloadComponent } from'./download/download.component';
import { MediaComponent } from'./media/media.component';
import { NewsComponent } from'./news/news.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'store', component: StoreComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'media', component: MediaComponent },
  { path: 'news', component: NewsComponent }
];
