import { ContaComponent } from './conta/conta.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'pessoa', component:ContaComponent},
    {path:'**', redirectTo:''}
];

export const rounting = RouterModule.forRoot(appRoutes);