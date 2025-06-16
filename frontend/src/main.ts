import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { UserHttpAdapter } from './app/infrastructure/http/user-http.adapter';
import { TaskHttpAdapter } from './app/infrastructure/http/task-http.adapter';


import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: 'UserPort', useClass: UserHttpAdapter }, // Asocia UserPort con UserHttpAdapter
    { provide: 'TaskPort', useClass: TaskHttpAdapter }, // Asocia TaskPort con TaskHttpAdapter
  ],
}).catch((err) => console.error(err));