//angular imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//libs imports
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxHeaderModule } from '@aposin/ng-aquila/header';

//local imports
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    NxFooterModule,
    NxHeaderModule,
    NxLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
