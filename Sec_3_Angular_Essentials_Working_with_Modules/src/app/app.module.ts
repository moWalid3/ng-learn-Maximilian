import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    // here any not standalone component you not to add it
    AppComponent,
    HeaderComponent,
    UserComponent,
  ], 
  imports: [ 
    // here any standalone component you need to add it 
    BrowserModule,
    SharedModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
