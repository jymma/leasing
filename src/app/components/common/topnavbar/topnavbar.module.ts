import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TopnavbarComponent } from "./topnavbar.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../../material.module";

@NgModule({
    declarations: [TopnavbarComponent],
    imports: [BrowserModule,
        MaterialModule,
        RouterModule,],
    exports: [TopnavbarComponent],
})

export class TopnavbarModule { }