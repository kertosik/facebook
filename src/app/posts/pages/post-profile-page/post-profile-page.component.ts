import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttachSession } from 'protractor/built/driverProviders';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {

  post = null;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.setupPost();
  }

  async setupPost() {
    // 0. Pobrac post ID z Urla
    const id: string = this.route.snapshot.params.post_id;

    console.log({ id });
    //1. Pobrać post na podsatawie ID

    const foundPost = await this.postsService.getPostById(id);

    //this.postService.getPostById()
    //2 Przypisac pobrany post do zmiennej instancji "post"

    this.post = foundPost;
  }
}
