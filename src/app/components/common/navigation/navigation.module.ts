import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component";
import { MaterialModule } from "../../../material.module";

@NgModule({
    declarations: [NavigationComponent],
    imports: [BrowserModule,
        RouterModule,
        MaterialModule],
    exports: [NavigationComponent],
})

export class NavigationModule { }