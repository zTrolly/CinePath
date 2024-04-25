import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../components/explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { MovieDb } from '../services/movieDb';
import { environment } from 'src/environments/environment';
import { MovieResult, SearchMultiResponse, TvResult } from '../types/request-types';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ExploreContainerComponent,FormsModule, CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page implements OnInit {


  searchTerm: string = '';
  segment: string = 'movies';
  movieDbService = new MovieDb(environment.api_key);
  ResultSearch = {} as SearchMultiResponse;
  MovieResult = {} as MovieResult[] | undefined;
  TvResult = {} as TvResult[] | undefined;


  constructor() { }
  
  ngOnInit() {

  }


  //get serachbar value
  searchChanged() {
    this.movieDbService.searchMulti({include_adult: false, query : this.searchTerm }).then((response) => {
      this.ResultSearch = response;
      this.MovieResult = (this.ResultSearch.results ? this.ResultSearch.results.filter((result) => result.media_type === 'movie') : []) as MovieResult[];
      this.TvResult = (this.ResultSearch.results ? this.ResultSearch.results.filter((result) => result.media_type === 'tv') : []) as TvResult[];
      console.log(this.MovieResult, this.TvResult);

      if(this.MovieResult.length > 0) {
        this.segment = 'movies';
      }
      else if(this.TvResult.length > 0) {
        this.segment = 'tvShows';
      }


      
    });
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

  getImgUrl = (path?: string, size?: string) =>  `https://image.tmdb.org/t/p/w500${path}`



  



}
