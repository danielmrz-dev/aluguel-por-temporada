import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideEnvironmentNgxMask(),
    {
      provide: MAT_DATE_LOCALE, 
      useValue: 'pt-BR'
    }
  ]
};
