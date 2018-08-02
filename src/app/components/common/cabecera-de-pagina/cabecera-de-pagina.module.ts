import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import { CabeceraBasicoComponent } from "./basico.component";

@NgModule({
    declarations: [CabeceraBasicoComponent],
    imports     : [BrowserModule, RouterModule],
    exports: [CabeceraBasicoComponent]
})

export class CabeceraBasicoModule {}
