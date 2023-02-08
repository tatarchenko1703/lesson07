import { Component, OnInit } from '@angular/core';
import { IBlog, IBlogRequest, IBlogResponse } from 'src/app/shared/interfaces/blog/blog.interface';
import { BlogService } from 'src/app/shared/services/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.scss']
})
  
export class AdminblogComponent implements OnInit {
  public adminBlogs!: IBlog[];
  public editStatus = false;
  public editid! : number;
  public title!: string;
  public textBlog!: string;
  public autor!: string;
  private url = environment.IMG_PATH;
  private imgname = environment.IMG_NAME;


  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getAll().subscribe(data => {
      // console.log(data);
      
      this.adminBlogs = data;
      // console.log(this.adminBlogs);
    })
  }


  addBlog(): void { 
    const addBlog: IBlogRequest = {
      title: this.title,
      text: this.textBlog,
      autor: this.autor,
      imgpath: `${this.url}${this.imgname}`
    };
    this.blogService.add(addBlog).subscribe(() => {
      this.getBlogs();
      this.resetForm();
    })

  }

  saveBlog(): void {
    const updateBlog: IBlogRequest = {
      title: this.title,
      text: this.textBlog,
      autor: this.autor,
      imgpath: `${this.url}${this.imgname}`
    };

    this.blogService.update(updateBlog, this.editid).subscribe(() => {
      this.getBlogs();
      this.resetForm();
    })

  }

  resetForm(): void { 
    this.title = '';
    this.autor = '';
    this.textBlog = '';
    this.editStatus = false;
  }

  editBlog(blog: IBlog): void { 
    this.title = blog.title;
    this.autor = blog.autor;
    this.textBlog = blog.text;
    this.editid = blog.id;
    this.editStatus = true;
  }

  deleteBlog(blog: IBlogResponse): void {
    if (confirm('Are you sure?')) {
      this.blogService.delete(blog.id).subscribe(() => {
        this.getBlogs();
      })
    }
  }

}
