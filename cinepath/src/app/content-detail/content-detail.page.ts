import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MovieDb } from '../services/movieDb';
import { environment } from 'src/environments/environment';
import { CreditsResponse, MovieImagesResponse, MovieResponse, ShowResponse, TvImagesResponse } from '../types/request-types';
import { addIcons } from 'ionicons';
import { heart, bookmark, eye } from 'ionicons/icons';
import { TrunkTextComponent } from '../components/trunk-text/trunk-text.component';


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.page.html',
  styleUrls: ['./content-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TrunkTextComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentDetailPage implements OnInit {
  movieDbService = new MovieDb(environment.api_key);
  movie = {} as MovieResponse;
  movieImages = {} as MovieImagesResponse;
  tvShow = {} as ShowResponse;
  tvShowImages = {} as TvImagesResponse
  tvShowCredits = {} as CreditsResponse;


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
      return this.type === 'Movies';
    }

    this.isTvShow = () => {
      return this.type === 'tvShow';
    }



    this.getImgUrl = (path?: string, size?: string) => {
      if (this.type === 'Movies')
        return `https://image.tmdb.org/t/p/w500${path}`

      return `https://media.themoviedb.org/t/p/w1000_and_h450_multi_faces/${path}`

    }

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





}
