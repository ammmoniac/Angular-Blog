import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  links = [
    {
      name: 'Menus',
      link: 'menus'
    },
    {
      name: 'Posts',
      link: 'posts'
    },
  ];
}
