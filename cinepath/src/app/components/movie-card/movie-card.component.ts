import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MovieDb } from 'src/app/services/movieDb';
import { environment } from 'src/environments/environment';
import { IonList, IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Import CommonModule here
    IonList, 
    IonItem, 
    IonThumbnail, 
    IonLabel
  ]
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  movieDbService = new MovieDb(environment.api_key);

  ngOnInit() {
    this.movieDbService.moviePopular({language: 'pt-BR'}).then((response) => {
      this.movies = response.results || []; // Initialize as an empty array if response.results is undefined
    }).catch(error => {
      console.error('Error fetching popular movies:', error);
    });
  }

  getMovieImageUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }
}
