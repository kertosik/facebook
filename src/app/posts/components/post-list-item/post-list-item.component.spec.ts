import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponent } from './post-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;
  let $component: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostListItemComponent],
      imports: [SharedModule,
        RouterTestingModule,]
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
