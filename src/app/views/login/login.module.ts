import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {loginComponent} from "./login.component";
import {MaterialModule} from "../../material.module";


@NgModule({
    declarations: [loginComponent],
    imports     : [BrowserModule,MaterialModule],
})

export class LoginModule {}