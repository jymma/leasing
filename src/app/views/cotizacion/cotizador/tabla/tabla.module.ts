import { NgModule } from "@angular/core";
import { TablaComponent } from "./tabla.component";
import { MaterialModule } from "../../../../material.module";
import { BienesModule } from "./bienes/bienes.module";
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [TablaComponent],
    imports: [MaterialModule,
        FormsModule,
        BienesModule
  
    ],
    exports: [TablaComponent]
})

export class TablaModule { }
