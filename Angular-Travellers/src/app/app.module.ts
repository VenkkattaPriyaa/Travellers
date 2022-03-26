import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import { HttpClientModule }   from '@angular/common/http';
import { TravellerDetailComponent } from './traveller-detail/traveller-detail.component';

  // Declarations are the Components you create
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    TravellerDetailComponent
  ],
  // Imports are installed imports
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
