import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';
import { environment } from 'src/environments/environment';

describe('PostsService', () => {

    let service: PostsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            //
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.get(PostsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
        console.log('beforeEach()');
    });

    describe('getPosts', () => {
        it('should contain method "getPosts"', () => {
            expect(service.getPosts).toEqual(
                jasmine.any(Function)
            );
        });


        it('should make HTTP request"', async () => {
            //1. zarejestrowac request
            const response = service.getPosts(); // PROMISE

            //2. Strowzyc serwer HTTP, ktory bedzie zwracal mockowe dane
            const server = httpMock.expectOne(environment.postsUrl);

            const fakePostList = [
                { id: 'hfa321' },
                { id: '1213hf' },
            ] as IPostList;

            server.flush({
                posts: fakePostList
            });

            //3. Pobrac dane z odpowiedzie z servera
            const posts = await response; // 


            //4 Sprawdzic poprawnosc otrzymanych danych
            expect(posts).toEqual(fakePostList);


        });

    });


    describe('getPostById', () => {

        it('should contain method "getPostById"', () => {
            expect(service.getPosts).toEqual(
                jasmine.any(Function)
            );
        });

        it('should make HTTP request"', async () => {
            //1. zarejestrowac request
            const postId = 'aaaaaaa'
            const response = service.getPostById(postId); // PROMISE

            //2. Strowzyc serwer HTTP, ktory bedzie zwracal mockowe dane
            const server = httpMock.expectOne(environment.postsUrl);

            const fakePost = { id: 'aaaaaaa' } as IPostListItem;

            const fakePostList = [
                fakePost,
                { id: '1213hf' },
            ] as IPostList;

            server.flush({
                posts: fakePostList
            });

            //3. Pobrac dane z odpowiedzie z servera
            const posts = await response; // 


            //4 Sprawdzic poprawnosc otrzymanych danych
            expect(posts).toEqual(fakePost);

        });

    });


});
