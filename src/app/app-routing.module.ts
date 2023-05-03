import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminGuard } from "./guards/admin.guard";

const routes: Routes = [
  {path: '', loadChildren: () => import('./front-page/front-page.module').then(x => x.FrontPageModule)},
  {path: 'login', component: LoginPageComponent},
  {path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then(x => x.AdminPageModule), canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
