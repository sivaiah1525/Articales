import { ArticalesComponent } from './componentes/articales/articales.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'login', loadChildren: () => import('./Auth/login/login.module').then(m => m.LoginModule) },
{ path: 'registration', loadChildren: () => import('./Auth/registration/registration.module').then(m => m.RegistrationModule) },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'articales', component: ArticalesComponent },
{ path: 'home', loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
