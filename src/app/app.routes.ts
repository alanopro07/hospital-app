import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import {ProgressComponent} from "./pages/progress/progress.component";
import {Graficas1Component} from "./pages/graficas1/graficas1.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

// rutas hijas de page component
const appRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        { path: 'progress', component: ProgressComponent },
        { path: 'graficas1', component: Graficas1Component },
        { path: 'dashboard', component: DashboardComponent},
        { path: '',redirectTo: '/dashboard', pathMatch: 'full'}
      ]
    },
    { path: '', component: PagesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
