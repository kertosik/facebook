import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListItemComponent } from './comment-list-item.component';
import { $ } from 'protractor';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interfaces';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

describe('CommentListItemComponent', () => {
  let component: CommentListItemComponent;
  let fixture: ComponentFixture<CommentListItemComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListItemComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be body', () => {
    component.comment = {
        body: 'To jest jakis text'
     } as ICommentListItem;

    fixture.detectChanges();

    const $body = $component.querySelector('.comment-body');
    expect($body.textContent).toEqual("To jest jakis text");
  });


  afterEach(() => {
    $component.remove();
  });

});
