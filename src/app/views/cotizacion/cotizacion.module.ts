import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {CotizacionComponent } from "./cotizacion.component";
import { MaterialModule } from "../../material.module";
import { CabeceraBasicoModule } from "../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { CotizadorModule } from "./cotizador/cotizador.module";



@NgModule({
    declarations: [CotizacionComponent],
    imports: [BrowserModule,
        MaterialModule,
        CabeceraBasicoModule,
        CotizadorModule
    ],
})

export class CotizacionModule { }