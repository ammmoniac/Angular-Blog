import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {PostsService, Post} from "../../service/posts/posts.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmadionDialogComponent } from "../shared/confirmadion-dialog/confirmadion-dialog.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { MenusService } from "../../service/menus/menus.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  postDetails: Post = {
    title: '',
    menu_id: '',
    content: ''
  }
  menusList: any;

  postForm: FormGroup;

  dataSource = new MatTableDataSource();
  displayedColumns = ["id", "title", "menu_id", "content", "actions"];
  constructor(private posts: PostsService, private menus: MenusService, public dialog: MatDialog, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      menu_id: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.posts.getPosts().subscribe((data: any) => {
      this.dataSource.data = data;
    })
    this.menus.getMenus().subscribe((data: any) => {
      this.menusList = data;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  addPost() {
    this.posts.addPost(this.postForm.value);
  }

  applyFilter(e: Event) {
    this.dataSource.filter = (e.target as HTMLInputElement).value.trim().toLowerCase();
  }

  editPost(postId: string, post: Post) {
    this.posts.updatePost(postId, post)
  }

  deletePost(postId: string) {
    this.posts.deletePost(postId);
  }

  openDialog(postId: string): void {
    const dialogRef = this.dialog.open(ConfirmadionDialogComponent, {
      width: '270px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true') {
        console.log('The dialog was closed' + postId);
        this.deletePost(postId);
      }
    });
  }

  openEditDialog(postId: string, title: string, menu_id: string, content: string): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '270px',
      data: { title, menu_id, content, "menus": this.menusList }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('The Edit dialog was closed');
        this.editPost(postId, result);
      }
    });
  }

}
