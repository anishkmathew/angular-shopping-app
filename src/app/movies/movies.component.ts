import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = "Movies List";
  movies;
  recentMovie;
  cart = [];
  constructor(service:MoviesService) { 
    this.movies = service.getMovies();
  }

  ngOnInit() {
  }

  selectedMovie(movie){
    this.recentMovie = movie;
    if (!this.cart.includes(movie))  {
      this.cart.push(movie);
      alert(movie + ' Added to cart')
    }else
      alert(movie + ' Already added!')
    
  }
}
