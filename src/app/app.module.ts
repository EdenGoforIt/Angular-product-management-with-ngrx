import { productReducer } from './products/state/product.reducer';
import { userReducer } from './user/state/user.reducer';
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
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { DashboardModule } from './home/dashboard/dashboard.module';
import { CreateOrderModule } from './create-order/create-order.module';
import { State } from './state/app.state';
import { localStorageSync } from 'ngrx-store-localstorage';

const reducers: ActionReducerMap<State> = {
  user: userReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['user'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'app App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule,
  ],
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
