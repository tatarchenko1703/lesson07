import { Component } from '@angular/core';
import { IBlog, IBlogRequest } from 'src/app/shared/interfaces/blog/blog.interface';
import { BlogService } from 'src/app/shared/services/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  public userBlogs: Array<IBlog> = [];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getAll().subscribe(data => {
      // console.log(data);

      this.userBlogs = data;
      console.log(this.userBlogs[0].imgpath);
    })
  }

}
