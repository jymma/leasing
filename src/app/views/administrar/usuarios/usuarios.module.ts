import { NgModule } from "@angular/core";
import { UsuariosComponent } from "./usuarios.component";
import { FormulariolModule } from "./formulario/formulario.module";
import { MaterialModule } from "../../../material.module";
import { CabeceraBasicoModule } from "../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SpinnerModule } from "../../../components/common/spinner/spinner.module";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [UsuariosComponent],
    imports: [
        BrowserModule,
        MaterialModule,
        FormulariolModule,
        CabeceraBasicoModule,
        SpinnerModule
    ],
})

export class UsuariosModule { }
