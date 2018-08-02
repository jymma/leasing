import { Routes } from "@angular/router";
import { CotizacionComponent } from "./views/cotizacion/cotizacion.component";
import { minorViewComponent } from "./views/minor-view/minor-view.component";
import { OperationsViewComponent } from "./views/operations/operations.component";
import { VisitorViewComponent } from "./views/visitas/visitor.component";
import { RisksViewComponent } from "./views/risks/risks.component";
import { loginComponent } from "./views/login/login.component";
import { businessComponent } from "./views/menu-izq/business.component";


import { blankComponent } from "./components/common/layouts/blank.component";
import { basicComponent } from "./components/common/layouts/basic.component";


export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // App views
  {
    path: '', component: basicComponent,
    children: [
      { path: 'cotizacion', component: CotizacionComponent },
      { path: 'minorView', component: minorViewComponent },
      { path: 'operations', component: OperationsViewComponent },
      { path: 'visitor', component: VisitorViewComponent },
      { path: 'risks', component: RisksViewComponent },

    ]
  },
  {
    path: '', component: blankComponent,
    children: [
      { path: 'business', component: businessComponent },

    ]
  },

  // Handle all other routes
  { path: '**', component: loginComponent }
];






