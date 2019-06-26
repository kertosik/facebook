import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListComponent } from './comment-list.component';
import { CommentListItemComponent } from '../comment-list-item/comment-list-item.component';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interfaces';


describe('CommentListComponent', () => {
  let component: CommentListComponent;
  let fixture: ComponentFixture<CommentListComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentListComponent, CommentListItemComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display list of comments', () => {
    component.comments =[
      { id : '7487454a'} as ICommentListItem,
      { id : '7863584a'} as ICommentListItem,
    ]
    fixture.detectChanges();
    
    const $comments = $component.querySelectorAll('app-comment-list-item');
    expect($comments.length).toBeGreaterThan(0);
  });
  afterEach(() => {
    $component.remove();
  });


});
