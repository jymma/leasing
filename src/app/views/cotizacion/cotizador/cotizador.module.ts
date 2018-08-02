import { NgModule } from "@angular/core";
import { CotizadorComponent } from "./cotizador.component";
import { MaterialModule } from "../../../material.module";
import { CabeceraBasicoModule } from "../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaModule } from "../cotizador/tabla/tabla.module";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [CotizadorComponent],
    imports: [
        MaterialModule,
        CabeceraBasicoModule,
        FormsModule, 
        TablaModule,
        BrowserModule,
        ReactiveFormsModule
    ],
})

export class CotizadorModule { }
