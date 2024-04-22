import { CommonModule } from '@angular/common'; // Import CommonModule
import { Component, Input, OnInit } from '@angular/core';
import { IonList, IonItem, IonThumbnail, IonLabel, IonContent } from '@ionic/angular/standalone';

import { MovieDb } from 'src/app/services/movieDb';
import { environment } from 'src/environments/environment';
import { MovieResult, TvResult } from 'src/app/types/request-types';
import { MovieCardComponent } from '../movie-card/movie-card.component';

import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true,
  imports: [IonContent, 
    CommonModule, 
    IonList, 
    IonItem, 
    IonThumbnail, 
    IonLabel,
    MovieCardComponent,
    RouterModule
  ]
})
export class MovieListComponent implements OnInit  {
  @Input() listType: string = 'Movies' || 'TVShows';
  @Input() searchType: string = 'Popular' || 'Top Rated' || 'Upcoming' || 'Now Playing';
  movieDbService = new MovieDb(environment.api_key);
  movies: MovieResult[] = [];
  tvShows: TvResult[] = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  
  ngOnInit(): void {
    register();

    if (this.listType === 'Movies') {
      this.tvShows = [];
      switch (this.searchType) {
        case 'Popular':
          this.movieDbService.moviePopular({language: 'pt-BR'}).then((response) => {
            this.movies = response.results || []; 
          }).catch(error => {
            console.error('Error fetching popular movies:', error);
          });
          break;
        case 'Top Rated':
          this.movieDbService.movieTopRated({language: 'pt-BR'}).then((response) => {
            this.movies = response.results || []; 
          }).catch(error => {
            console.error('Error fetching top rated movies:', error);
          });
          break;
        case 'Upcoming':
          this.movieDbService.upcomingMovies({language: 'pt-BR'}).then((response) => {
            this.movies = response.results || []; 
          }).catch(error => {
            console.error('Error fetching upcoming movies:', error);
          });
          break;
        case 'Now Playing':
          this.movieDbService.movieNowPlaying({language: 'pt-BR'}).then((response) => {
            this.movies = response.results || []; 
          }).catch(error => {
            console.error('Error fetching now playing movies:', error);
          });
          break;
        default:
          break;
      }
    }
    else if (this.listType === 'TVShows') {
      this.movies = [];
      switch (this.searchType) {
        case 'Popular':
          this.movieDbService.tvPopular({language: 'pt-BR'}).then((response) => {
            this.tvShows = response.results || []; 
          }).catch(error => {
            console.error('Error fetching popular tvshows:', error);
          });
          break;
        case 'Top Rated':
          this.movieDbService.tvTopRated({language: 'pt-BR'}).then((response) => {
            this.tvShows = response.results || []; 
          }).catch(error => {
            console.error('Error fetching top rated tvshows:', error);
          });
          break;
        default:
          break;
      }
    } 

   
    
  }
}
