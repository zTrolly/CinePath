import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

register();

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'cinepath-all',
        appId: '1:550242604743:web:8fdd775090cfe56baad0e2',
        storageBucket: 'cinepath-all.appspot.com',
        apiKey: 'AIzaSyCnQU2whS-dJVh39TAJQ6J4nDtFF7YVYR0',
        authDomain: 'cinepath-all.firebaseapp.com',
        messagingSenderId: '550242604743',
        measurementId: 'G-DRQPXR00R5',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});
