import {
  async, inject, TestBed
} from '@angular/core/testing';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {
  HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Movie } from '../model/movie';
import { MovieService } from './movie.service';

const makeMovieData = () => [
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
}];

describe('MovieService (mockBackend)', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
      MovieService,
      { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));

  it('can instantiate service when inject service',
    inject([MovieService], (service: MovieService) => {
      expect(service instanceof MovieService).toBe(true);
    }));

  it('can instantiate service with "new"', inject([Http], (http: Http) => {
    expect(http).not.toBeNull('http should be provided');
    const service = new MovieService(http);
    expect(service instanceof MovieService).toBe(true, 'new service should be ok');
  }));


  it('can provide the mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
    }));

  // describe('when searchMovie', () => {
    //   let backend: MockBackend;
    //   let service: MovieService;
    //   let fakeMovies: any;
    //   let response: Response;

    //   beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      //     backend = be;
      //     service = new MovieService(http);
      //     fakeMovies = makeMovieData();
      //     let options = new ResponseOptions({status: 200, body: {data: fakeMovies}});
      //     response = new Response(options);
      //   }));

      //   it('should have expected fake heroes (then)', async(inject([], () => {
        //     backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        //     service.searchMovie('Arrival').toPromise()
        //     .then(movies => {
          //       expect(movies.Search.length).toBe(fakeMovies.length,
          //         'should have expected no. of heroes');
          //     });
          //   })));

          //   it('should have expected fake heroes (Observable.do)', async(inject([], () => {
            //     backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
            //     service.searchMovie('Arrival')
            //     .do(movies => {
              //       expect(movies.length).toBe(fakeMovies.length,
              //         'should have expected no. of heroes');
              //     })
              //     .toPromise();
              //   })));


              //   it('should be OK returning no heroes', async(inject([], () => {
                //     let resp = new Response(new ResponseOptions({status: 200, body: {data: []}}));
                //     backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

                //     service.searchMovie('Arrival')
                //     .do(movies => {
                  //       expect(movies.length).toBe(0, 'should have no heroes');
                  //     })
                  //     .toPromise();
                  //   })));

                  //   it('should treat 404 as an Observable error', async(inject([], () => {
                    //     let resp = new Response(new ResponseOptions({status: 404}));
                    //     backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

                    //     service.searchMovie('Arrival')
                    //     .do(movies => {
                      //       fail('should not respond with movies');
                      //     })
                      //     .catch(err => {
                        //       expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
                        //       return Observable.of(null); // failure is the expected test result
                        //     })
                        //     .toPromise();
                        //   })));
                        // });
                      });
