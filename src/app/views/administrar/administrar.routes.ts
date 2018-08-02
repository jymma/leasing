import { Routes } from "@angular/router";
import { basicComponent } from "../../components/common/layouts/basic.component";
import {  UsuariosComponent} from "./usuarios/usuarios.component";
import {  DealersComponent} from "./dealers/dealers.component";
import { SucursalesComponent } from "./dealers/sucursales/sucursales.component";
import { CotizadorComponent } from "../cotizacion/cotizador/cotizador.component";


export const ROUTES: Routes = [
  {
    path: '', component: basicComponent,
    children: [
      { path: 'administrar/usuarios', component: UsuariosComponent},
      { path: 'administrar/dealers', component: DealersComponent},
      { path: 'administrar/dealers/sucursales', component: SucursalesComponent },
      { path: 'cotizacion/cotizador', component: CotizadorComponent },
 
    ]
  },
];






