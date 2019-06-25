import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { MyDatePipe } from '../shared/pipes/my-date.pipe';

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],

  exports: [
    PostListComponent,
    PostListItemComponent,
    MyDatePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PostsModule { }
