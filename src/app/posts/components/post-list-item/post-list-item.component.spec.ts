import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponent } from './post-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CommentsModule } from 'src/app/comments/comments.module';
import { CommentListComponent } from 'src/app/comments/components/comment-list/comment-list.component';
import { CommentAddFormComponent } from 'src/app/comments/components/comment-add-form/comment-add-form.component';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;
  let $component: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostListItemComponent],
      imports: [SharedModule,
        RouterTestingModule,
      CommentsModule,]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    $component.remove();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
