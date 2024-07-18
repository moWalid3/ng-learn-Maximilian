import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideExperimentalZonelessChangeDetection()],
}).catch((err) => console.error(err));

// to rid zone.js or delete it do this:
// [1] remove "zone.js" from "polyfills":[] in angular.json
// [2] set {providers: [provideExperimentalZonelessChangeDetection()]} like above
