import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  
  constructor(private moviesService : MoviesService ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() : void {
    this.moviesService.getMovies()
        .subscribe(movies => this.movies = movies);
  }

}
