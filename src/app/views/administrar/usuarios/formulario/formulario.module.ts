import { NgModule } from "@angular/core";
import { FormularioUsuarioComercialComponent } from "./formulario.component";
import { MaterialModule } from "../../../../material.module";
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from "../../../../components/common/spinner/spinner.module";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        FormularioUsuarioComercialComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule,
        SpinnerModule
    ],
    exports: [
        FormularioUsuarioComercialComponent
    ]
})

export class FormulariolModule {
}
