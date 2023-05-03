import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesListComponent } from "./pages-list/pages-list.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FrontRoutingModule } from "./front-routing.module";
import { FrontPageComponent } from "./front-page.component";
import { AppNavbarComponent } from "./app-navbar/app-navbar.component";
import { MaterialModule } from "../admin-page/material.module";
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    MaterialModule
  ],
  declarations: [PagesListComponent, HomePageComponent, FrontPageComponent, AppNavbarComponent, PagesComponent],
})
export class FrontPageModule { }