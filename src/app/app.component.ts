import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }  

  fetchPosts(): void {
    this.postService.getAllPosts()
      .subscribe(
        response => {
          this.POSTS = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onTableDataChange(event){
    this.page = event;
    this.fetchPosts();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }  

}
