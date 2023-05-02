import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./material.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from "./admin-page.component";
import { AppNavbarComponent } from "./app-navbar/app-navbar.component";
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from "@angular/forms";
import { ConfirmadionDialogComponent } from './shared/confirmadion-dialog/confirmadion-dialog.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    AdminPageComponent,
    AppNavbarComponent,
    MenusComponent,
    PostsComponent,
    ConfirmadionDialogComponent,
    EditMenuComponent
  ],
  entryComponents: [ConfirmadionDialogComponent, EditMenuComponent]
})
export class AdminPageModule { }
