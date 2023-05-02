import {Component, OnInit, ViewChild} from '@angular/core';
import {MenusService, Menu} from "../../service/menus/menus.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  menuDetails: Menu = {
    title: "",
    url: ""
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ["id", "title", "url"];
  constructor(private menus: MenusService) {
  }

  ngOnInit() {
    this.menus.getMenus().subscribe((data: any) => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  addMenu() {
    this.menus.addMenu(this.menuDetails);
  }

  applyFilter(e: Event) {
    this.dataSource.filter = (e.target as HTMLInputElement).value.trim().toLowerCase();
  }

}
