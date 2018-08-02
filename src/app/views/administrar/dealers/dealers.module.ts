import { NgModule } from "@angular/core";
import { DealersComponent } from "./dealers.component";
import { FormularioModule } from "./formulario/formulario.module";
import { UbicacionModule } from "./ubicacion/ubicacion.module";
import { MaterialModule } from "../../../material.module";
import { CabeceraBasicoModule } from "../../../components/common/cabecera-de-pagina/cabecera-de-pagina.module";
import { SucursalesModule } from "./sucursales/sucursales.module";


@NgModule({
    declarations: [DealersComponent],
    imports: [MaterialModule,
        FormularioModule,
        CabeceraBasicoModule,
        UbicacionModule,
        SucursalesModule],
})

export class DealersModule { }
