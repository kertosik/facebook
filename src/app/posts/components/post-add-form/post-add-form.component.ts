import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import uuid from 'uuid';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  @Output() addPost = new EventEmitter();

  addPostForm = new FormGroup({
    body: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  get body(){
    return this.addPostForm.get('body');
  }

  onSubmit(){
    const fields = this.addPostForm.getRawValue();
    fields.id= uuid();
    fields.author= {
      id: 'aaaaaaaa',
      name: 'Anonymous',
      avatar_url: ':)'
    }
    fields.create_date= new Date().toUTCString();
    fields.images=['http://placekitten.com/g/200/300']
    console.log('onSubmit()', fields)
    this.addPost.next( Object.assign({},fields)); 
  }
}
