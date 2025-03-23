import { ApplicationConfig  , importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';


import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './modules/auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AgmCoreModule } from '@agm/core';
import { environment } from './modules/environmect/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([authInterceptor]) // Registering the HTTP interceptor
    ),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true
    })),
    // provideAgmCore({
    //   apiKey: environment.GOOGLE_API_KEY,
    //   libraries: ['places', 'geometry'],
    // }),

  ]  };


