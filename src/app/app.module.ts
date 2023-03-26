import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PfpListComponent } from './pfp-list/pfp-list.component';
import { PfpComponent } from './pfp/pfp.component';

@NgModule({
  declarations: [
    AppComponent,
    PfpListComponent,
    PfpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
