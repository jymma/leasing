import { NgModule } from "@angular/core";
import { FormularioSucursalesComponent } from "./formulario.component";
import { MaterialModule } from "../../../../../material.module";
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [FormularioSucursalesComponent],
    imports: [MaterialModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBy4Xx0uzXTf9dnk9n0BqpvhNe0il7Gd4Q'
        })],
    exports: [FormularioSucursalesComponent]
})

export class FormulariolModule { }
