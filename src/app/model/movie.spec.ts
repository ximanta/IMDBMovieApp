import { Movie } from './movie';

const movie = new Movie('Batman Begins', '2005', 'tt0372784', 'movie', 'https://sampleImage.jpg');

describe('Movie', () => {
  it('has Title', () => {
    expect(movie.Title).toBe('Batman Begins');
  });

  it('has Year', () => {
    expect(movie.Year).toBe('2005');
  });

  it('has ImdbID', () => {
    expect(movie.imdbID).toBe('tt0372784');
  });

  it('has Type', () => {
    expect(movie.Type).toBe('movie');
  });

  it('has Poster', () => {
    expect(movie.Poster).toBe('https://sampleImage.jpg');
  });

  it('can clone itself', () => {
    const clone = new Movie('Batman Begins', '2005', 'tt0372784', 'movie', 'https://sampleImage.jpg');
    expect(movie).toEqual(clone);
  });
});
