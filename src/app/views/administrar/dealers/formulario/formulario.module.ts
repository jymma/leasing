import { NgModule } from "@angular/core";
import { FormularioDealersComponent } from "./formulario.component";
import { MaterialModule } from "../../../../material.module";
import { FormsModule } from '@angular/forms'; 

@NgModule({
    declarations: [FormularioDealersComponent],
    imports: [MaterialModule, FormsModule],
    exports: [FormularioDealersComponent]
})

export class FormularioModule { }
