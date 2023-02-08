import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminblogComponent } from './pages/admin/adminblog/adminblog.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'admin/blogs'
  },
  { path: 'blog', component: BlogComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'blogs', component: AdminblogComponent },
      { path: '', pathMatch: 'full', redirectTo: 'admin/blogs' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
