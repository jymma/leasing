import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {VisitorViewComponent} from "./visitor.component";
import { FormularioModule } from "./formulario/formulario.module";
import { CabeceraBasicoModule } from "../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { MaterialModule } from "../../material.module";

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [VisitorViewComponent],
    imports: [BrowserModule, CabeceraBasicoModule,FormsModule, MaterialModule, FormularioModule],
})

export class VisitorViewModule {}