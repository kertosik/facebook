import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { MyDatePipe } from '../shared/pipes/my-date.pipe';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent,
    PostProfilePageComponent
  ],

  exports: [
    PostListComponent,
    PostListItemComponent,
    MyDatePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PostsModule { }
