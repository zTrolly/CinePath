import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../components/explore-container/explore-container.component';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieDb } from '../services/movieDb';
import { environment } from 'src/environments/environment';
import { MovieResult } from '../types/request-types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MovieCardComponent],
})
export class Tab1Page {
  
  constructor() {
    const movieDb = new MovieDb(environment.api_key);
    let teste: MovieResult[] | undefined = [];
    
    movieDb.moviePopular().then((response) => {
      console.log(response.results);

      teste = response.results;
    });

    console.log(teste);
  }
}
