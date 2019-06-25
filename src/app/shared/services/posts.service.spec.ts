import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';

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
      const server = httpMock.expectOne('assets/posts.json');
      server.flush(['pierwszy', 'drugi']);

      //3. Pobrac dane z odpowiedzie z servera
      const posts = await response; // 

      //4 Sprawdzic poprawnosc otrzymanych danych
      expect(posts).toEqual(['pierwszy', 'drugi']);


    });

  });

});
