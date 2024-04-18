import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton } from '@ionic/angular/standalone';

import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { ExploreContainerComponent } from '../components/explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonButton,
    MovieCardComponent,
    MovieListComponent,
    ExploreContainerComponent,
    MovieCardComponent
  ]
})
export class Tab1Page {
  
  constructor() {
    console.log(MovieListComponent)
  
  }
}
