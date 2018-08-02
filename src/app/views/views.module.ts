import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HelpViewModule} from "./help/help.module";
import {OperationsViewModule} from "./operations/operations.module";
import {VisitorViewModule} from "./visitas/visitor.module";
import {RisksViewModule} from "./risks/risks.module";
import { AdministrarModule } from "./administrar/administrar.module";
import { CotizacionModule } from "./cotizacion/cotizacion.module";

@NgModule({
    declarations: [],
    imports: [BrowserModule, HelpViewModule, OperationsViewModule, VisitorViewModule, RisksViewModule, AdministrarModule, CotizacionModule ],
})

export class ViewsModule {}
