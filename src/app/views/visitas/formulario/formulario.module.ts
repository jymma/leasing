import { NgModule } from "@angular/core";
import { FormularioVisitorComponent } from "./formulario.component";
import { MaterialModule } from "../../../material.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [FormularioVisitorComponent],
    imports: [MaterialModule, FormsModule],
    exports: [FormularioVisitorComponent]
})

export class FormularioModule { }
