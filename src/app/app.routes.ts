import { Routes } from '@angular/router';
import { CategoryService } from './category.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

export const routes: Routes = [{
    path: "",
    loadComponent: () => import('./pages/login/login.component').then(a => a.LoginComponent)
},
{
    path: "profile",
    loadComponent: () => import('./pages/profile/profile.component').then(b => b.ProfileComponent)
}
];
