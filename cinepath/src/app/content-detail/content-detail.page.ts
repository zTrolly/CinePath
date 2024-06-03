import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Import Location
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MovieDb } from '../services/movieDb';
import { environment } from 'src/environments/environment';
import { CreditsResponse, MovieImagesResponse, MovieResponse, ShowResponse, SimilarMovieResponse, TvImagesResponse, TvSimilarShowsResponse } from '../types/request-types';
import { addIcons } from 'ionicons';
import { heart, bookmark, eye } from 'ionicons/icons';
import { TrunkTextComponent } from '../components/trunk-text/trunk-text.component';
import { AppService } from '../services/appService';

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
  tvShowImages = {} as TvImagesResponse;
  tvShowCredits = {} as CreditsResponse;
  similarTvShows = {} as TvSimilarShowsResponse;

  isMovie: (() => boolean) | undefined;
  isTvShow: (() => boolean) | undefined;
  getImgUrl: (path?: string) => string = () => '';
  type: string = '';
  id: string = '';
  isFavorite: boolean = false;
  isBookmark: boolean = false;
  isWatchlist: boolean = false;

  constructor(private route: ActivatedRoute, private appService: AppService, private location: Location) { // Inject Location
    addIcons({ heart, bookmark, eye });
  }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type')!;
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.isMovie = () => this.type === 'movie';
    this.isTvShow = () => this.type === 'tvShow';

    this.appService.user$.subscribe((user) => {
      if (user) {
        this.appService.isFavorite(this.type, parseInt(this.id)).then((isFavorite) => {
          this.isFavorite = isFavorite;
          this.appService.isBookmark(this.type, parseInt(this.id)).then((isBookmark) => {
            this.isBookmark = isBookmark;
            this.appService.isWatchlist(this.type, parseInt(this.id)).then((isWatchlist) => {
              this.isWatchlist = isWatchlist;
            }).catch(error => {
              console.error('Error checking if watchlist:', error);
            });
          }
          ).catch(error => {
            console.error('Error checking if bookmark:', error);
          });
        }).catch(error => {
          console.error('Error checking if favorite:', error);
        });
      }
    });

    this.getImgUrl = (path?: string) => `https://image.tmdb.org/t/p/w500${path}`;

    if (this.type && this.id) {
      if (this.type === 'tvShow') {
        this.movieDbService.tvInfo({ id: this.id, language: 'pt-BR' }).then((response) => {
          this.tvShow = response;
          this.movieDbService.tvImages({ id: this.id }).then((response) => {
            this.tvShowImages = response;
            this.movieDbService.tvCredits({ id: this.id }).then((response) => {
              this.tvShowCredits = response;
            }).catch(error => {
              console.error('Error fetching tv show credits:', error);
            });
          }).catch(error => {
            console.error('Error fetching tv show images:', error);
          });
        }).catch(error => {
          console.error('Error fetching tv show:', error);
        });

        this.movieDbService.tvSimilar({ id: this.id }).then((response) => {
          this.similarTvShows = response;
        }).catch(error => {
          console.error('Error fetching similar tv shows:', error);
        });
      } else {
        this.movieDbService.movieInfo({ id: this.id, language: 'pt-BR' }).then((response) => {
          this.movie = response;
          this.movieDbService.movieImages({ id: this.id }).then((response) => {
            this.movieImages = response;
            this.movieDbService.movieCredits({ id: this.id }).then((response) => {
              this.movieCredits = response;
            }).catch(error => {
              console.error('Error fetching movie credits:', error);
            });
          }).catch(error => {
            console.error('Error fetching movie images:', error);
          });
        }).catch(error => {
          console.error('Error fetching movie:', error);
        });

        this.movieDbService.movieSimilar({ id: this.id }).then((response) => {
          this.similarMovies = response;
        }).catch(error => {
          console.error('Error fetching similar movies:', error);
        });
      }
    }

    if (this.tvShowImages.backdrops) {
      this.tvShowImages.backdrops = this.tvShowImages.backdrops.slice(0, 5);
    }

    if (this.tvShowImages.posters) {
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

  async toggleFavorite() {
    if (this.isFavorite) {
      await this.appService.removeFavorite(this.type, parseInt(this.id));
      this.isFavorite = false;
    } else {
      await this.appService.addFavorite(this.type, parseInt(this.id));
      this.isFavorite = true;
    }
  }

  async toggleBookmark() {
    if (this.isBookmark) {
      await this.appService.removeBookmark(this.type, parseInt(this.id));
      this.isBookmark = false;
    } else {
      await this.appService.addBookmark(this.type, parseInt(this.id));
      this.isBookmark = true;
    }
  }

  async toggleWatchlist() {
    if (this.isWatchlist) {
      await this.appService.removeWatchlist(this.type, parseInt(this.id));
      this.isWatchlist = false;
    } else {
      await this.appService.addWatchlist(this.type, parseInt(this.id));
      this.isWatchlist = true;
    }
  }
  

  goBack() {
    this.location.back();
  }
}
