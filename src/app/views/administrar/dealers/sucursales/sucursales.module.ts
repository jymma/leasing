import { NgModule } from "@angular/core";
import { SucursalesComponent} from "./sucursales.component";
import { FormulariolModule } from "./formulario/formulario.module";
import { MaterialModule } from "../../../../material.module";
import { CabeceraBasicoModule } from "../../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";

@NgModule({
    declarations: [SucursalesComponent],
    imports: [
        MaterialModule,
        FormulariolModule,
        CabeceraBasicoModule
    ],
})

export class SucursalesModule { }
