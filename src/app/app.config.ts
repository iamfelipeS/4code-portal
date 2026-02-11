import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import localept from '@angular/common/locales/pt';
import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

registerLocaleData(localept);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
     withInMemoryScrolling({
        scrollPositionRestoration: 'top', 
        anchorScrolling: 'enabled',
      }),
    ),
    provideHttpClient(
      withInterceptors([
        // loaderInterceptor, 
        // authInterceptor
      ])
    ),
    { provide: LOCALE_ID, useValue: 'pt-PT' },
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideNgxMask({
    //   validation: false,
    //   dropSpecialCharacters: true,
    //   thousandSeparator: '.',
    //   decimalMarker: ',',
    // }),
  ]
};
