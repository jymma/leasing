import { NgModule } from "@angular/core";
import { UbicacionDealersComponent } from "./ubicacion.component";
import { MaterialModule } from "../../../../material.module";
import { AgmCoreModule } from '@agm/core';


@NgModule({
    declarations: [UbicacionDealersComponent],
    imports: [MaterialModule, AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBy4Xx0uzXTf9dnk9n0BqpvhNe0il7Gd4Q'
      })],
    exports: [UbicacionDealersComponent]
})

export class UbicacionModule { 
   
}
