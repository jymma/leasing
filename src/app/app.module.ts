import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



// App views
import {CotizacionModule} from "./views/cotizacion/cotizacion.module";
import {MinorViewModule} from "./views/minor-view/minor-view.module";
import {ViewsModule} from "./views/views.module";
import {LoginModule} from "./views/login/login.module";
import {BusinessModule} from "./views/menu-izq/business.module";


// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
  

    // Views
    CotizacionModule,
    MinorViewModule,
    ViewsModule,
    LoginModule,
    BusinessModule,
  

    // Modules
    LayoutsModule,
  


   
 

    RouterModule.forRoot(ROUTES,{
      useHash: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
