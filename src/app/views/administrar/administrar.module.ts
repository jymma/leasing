import { NgModule } from "@angular/core";
import { UsuariosModule } from "./usuarios/usuarios.module";
import { DealersModule  } from "./dealers/dealers.module";

import { RouterModule } from "@angular/router";
import { ROUTES } from "./administrar.routes";
import { SpinnerModule } from "../../components/common/spinner/spinner.module";
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(ROUTES),
        SpinnerModule,
        UsuariosModule,
        DealersModule
    ],
    exports: [
    ]
})

export class AdministrarModule { }
