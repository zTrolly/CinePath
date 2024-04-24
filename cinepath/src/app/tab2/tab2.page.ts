import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/angular/standalone';
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
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonSearchbar, FormsModule]
})
export class Tab2Page implements OnInit {


  searchTerm: string = '';
  movieDbService = new MovieDb(environment.api_key);
  ResultSearch = {} as SearchMultiResponse;
  MovieResult = {} as MovieResult[] | undefined;
  TvResult = {} as TvResult[] | undefined;


  constructor() { }
  
  ngOnInit() {

  }


  //get serachbar value
  searchChanged() {
    this.movieDbService.searchMulti({include_adult: true, query : this.searchTerm }).then((response) => {
      this.ResultSearch = response;
      this.MovieResult = (this.ResultSearch.results ? this.ResultSearch.results.filter((result) => result.media_type === 'movie') : []) as MovieResult[];
      this.TvResult = (this.ResultSearch.results ? this.ResultSearch.results.filter((result) => result.media_type === 'tv') : []) as TvResult[];
      console.log(this.ResultSearch);
    });
  }



}
