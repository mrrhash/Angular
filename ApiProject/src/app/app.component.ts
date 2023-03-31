import { Component } from '@angular/core';
import { PostService } from './services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts:any;
  title = 'ApiProject';

  /**
   *
   */
  constructor(private post:PostService) { }

  ngOnInit() {
    this.post.getPosts().subscribe(response=>{
        this.posts = response;
        console.log(this.posts);
    })
  }
}
