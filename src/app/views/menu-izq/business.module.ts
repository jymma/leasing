import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {businessComponent} from "./business.component";
import {RouterModule} from "@angular/router";
import {TopnavbarModule} from "../../components/common/topnavbar/topnavbar.module"


@NgModule({
    declarations: [businessComponent],
    imports     : [BrowserModule,TopnavbarModule],
})

export class BusinessModule {}