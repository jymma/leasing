import { NgModule } from "@angular/core";
import { BienesComponent } from "./bienes.component";
import { MaterialModule } from "../../../../../material.module";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    declarations: [BienesComponent],
    imports: [MaterialModule,
        FormsModule, 
        BrowserModule,
        ReactiveFormsModule
    ],
    exports: [BienesComponent]
})

export class BienesModule { }
