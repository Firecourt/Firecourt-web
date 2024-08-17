import { bootstrapApplication } from'@angular/platform-browser';
import { AppComponent } from'./app/app.component';
import { provideRouter, RouterModule } from'@angular/router';
import { provideZoneChangeDetection, importProvidersFrom } from'@angular/core';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    
    importProvidersFrom(
      RouterModule.forRoot(routes)
    ),
    provideZoneChangeDetection({ eventCoalescing: true })
    // Add other providers if necessary
  ]
})
.catch(err =>console.error(err));
