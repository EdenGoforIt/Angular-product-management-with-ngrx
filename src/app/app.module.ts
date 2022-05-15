import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './shared/product-data';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShellComponent } from './home/shell.component';
import { MenuComponent } from './home/nav/menu.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from './shared/material.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    ChartsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
