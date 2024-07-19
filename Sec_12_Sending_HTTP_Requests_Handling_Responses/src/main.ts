import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './app/logging.interceptor';


bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withFetch(), withInterceptors([loggingInterceptor]))]
}).catch((err) => console.error(err));
