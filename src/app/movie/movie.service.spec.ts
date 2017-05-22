import {
  async,
  inject,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import {
  HttpModule,
  BaseRequestOptions,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { Movie } from '../model/movie';
import { MovieService } from './movie.service';

let movieService: MovieService;
let mockBackend: MockBackend;

const mockResponse = {
  Search : [
  {
    'Title': 'Arrival',
    'Year': '2016',
    'imdbID': 'tt2543164',
    'Type': 'movie',
    'Poster': 'https://images-na.ssl-images-amazon.com/images\
    /M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg'
  },
  {
    'Title': 'The Arrival',
    'Year': '1996',
    'imdbID': 'tt0115571',
    'Type': 'movie',
    'Poster': 'https://images-na.ssl-images-amazon.com/images\
    /M/MV5BMzhiN2M1NGUtOWVmNi00YWU1LWJlNGMtZDMzYjkwZTQ4MmY4XkEyXkFqcGdeQXVyNjc2NDI1ODA@._V1_SX300.jpg'
  },
  {
    'Title': 'The Arrival of a Train',
    'Year': '1896',
    'imdbID': 'tt0000012',
    'Type': 'movie',
    'Poster': 'https://images-na.ssl-images-amazon.com/images\
    /M/MV5BZjE2MGVkMTAtMWIwYy00YzQ5LWE2YTAtMTU2NGJmNGNjY2IyXkEyXkFqcGdeQXVyNjMxMzM3NDI@._V1_SX300.jpg'
  },
  {
    'Title': 'Arrival II',
    'Year': '1998',
    'imdbID': 'tt0122961',
    'Type': 'movie',
    'Poster': 'https://images-na.ssl-images-amazon.com/images\
    /M/MV5BMjA2MDI3NjcyN15BMl5BanBnXkFtZTcwOTMxOTUyMQ@@._V1_SX300.jpg'
  }]
};

describe('Service: MovieService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
      MockBackend,
      BaseRequestOptions,
      {
        deps: [
        MockBackend,
        BaseRequestOptions ],
        provide: Http,
        useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }
      },
      MovieService
      ]
    });

    movieService = TestBed.get(MovieService);
    mockBackend = TestBed.get(MockBackend);
  }));

  it('should create an instance', () => {
    expect(movieService).toBeTruthy();
  });

  it('getMovie() should return the list of movie from the server on success', () => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    movieService.getMovies('Arrival').subscribe((movies) => {
      expect(movies.length).toBe(4);
    });
  });
});
