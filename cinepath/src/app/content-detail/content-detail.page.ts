import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MovieDb } from '../services/movieDb';
import { environment } from 'src/environments/environment';
import { CreditsResponse, MovieImagesResponse, MovieResponse, ShowResponse, SimilarMovieResponse, TvImagesResponse, TvSimilarShowsResponse } from '../types/request-types';
import { addIcons } from 'ionicons';
import { heart, bookmark, eye } from 'ionicons/icons';
import { TrunkTextComponent } from '../components/trunk-text/trunk-text.component';
import { IonSegment } from '@ionic/angular/standalone';



@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.page.html',
  styleUrls: ['./content-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TrunkTextComponent, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentDetailPage implements OnInit {

  segment: string = 'info'; // valor inicial

  movieDbService = new MovieDb(environment.api_key);

  movie = {} as MovieResponse;
  movieImages = {} as MovieImagesResponse;
  movieCredits = {} as CreditsResponse;
  similarMovies = {} as SimilarMovieResponse;

  tvShow = {} as ShowResponse;
  tvShowImages = {} as TvImagesResponse
  tvShowCredits = {} as CreditsResponse;
  similarTvShows = {} as TvSimilarShowsResponse;


  isMovie: (() => boolean) | undefined;
  isTvShow: (() => boolean) | undefined;
  getImgUrl: (path?: string) => string = () => '';
  type: string = '';
  id: string = '';
  


  constructor(private route: ActivatedRoute) {
    addIcons({
      heart, bookmark, eye

    });

  }
  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type')!;
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.isMovie = () => {
      return this.type === 'movie';
    }

    this.isTvShow = () => {
      return this.type === 'tvShow';
    }



    this.getImgUrl = (path?: string, size?: string) =>  `https://image.tmdb.org/t/p/w500${path}`


    

    if (this.type && this.id) {
      if (this.type === 'tvShow') {
        this.movieDbService.tvInfo({ id: this.id, language: 'pt-BR' }).then((response) => {
          this.tvShow = response;
          console.log('tv show:', this.tvShow);
          this.movieDbService.tvImages({ id: this.id }).then((response) => {
            this.tvShowImages = response;
            console.log('tv show images:', this.tvShowImages);

            this.movieDbService.tvCredits({ id: this.id }).then((response) => {
              this.tvShowCredits = response;
              console.log('tv show credits:', this.tvShowCredits);

            }
            ).catch(error => {
              console.error('Error fetching tv show credits:', error);
            });
          }

          ).catch(error => {
            console.error('Error fetching tv show images:', error);
          });
        }).catch(error => {
          console.error('Error fetching tv show:', error);
        });

        this.movieDbService.tvSimilar({ id: this.id }).then((response) => {
          this.similarTvShows = response;
          console.log('similar tv shows:', this.similarTvShows);
        }).catch(error => {
          console.error('Error fetching similar tv shows:', error);
        });

      } else {
        this.movieDbService.movieInfo({ id: this.id, language: 'pt-BR' }).then((response) => {
          this.movie = response;
          console.log('movie:', this.movie);
          this.movieDbService.movieImages({ id: this.id }).then((response) => {
            this.movieImages = response;
            console.log('movie images:', this.movieImages);
            this.movieDbService.movieCredits({ id: this.id }).then((response) => {
              this.movieCredits = response;
              console.log('movie credits:', this.movieCredits);

            }
            ).catch(error => {
              console.error('Error fetching movie credits:', error);
            });
          }

          ).catch(error => {
            console.error('Error fetching movie images:', error);
          });
        }).catch(error => {
          console.error('Error fetching movie:', error);
        });

        this.movieDbService.movieSimilar({ id: this.id }).then((response) => {
          this.similarMovies = response;
          console.log('similar movies:', this.similarMovies);
        }).catch(error => {
          console.error('Error fetching similar movies:', error);
        });
      }

    }

    if (this.tvShowImages.backdrops) {
      // epgar as 5 primeiras imagens
      this.tvShowImages.backdrops = this.tvShowImages.backdrops.slice(0, 5);
    }

    if (this.tvShowImages.posters) {
      // pegar as 5 primeiras imagens
      this.tvShowImages.posters = this.tvShowImages.posters.slice(0, 5);
    }

    


  }

  navigateToContent(id: number | undefined, type: 'tvShow' | 'movie') {
    if (id) {
      if (type === 'tvShow') {
        window.location.href = `/contentDetail/tvShow/${id}`;
      } else {
        window.location.href = `/contentDetail/movie/${id}`;
      }
    }
  }


}
