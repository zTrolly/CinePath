import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonButton, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { ExploreContainerComponent } from '../components/explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonSegmentButton, IonSegment, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonButton,
    IonSegment,
    NgIf,
    MovieCardComponent,
    MovieListComponent,
    ExploreContainerComponent,
    MovieCardComponent,
    FormsModule
  ]
})
export class Tab1Page {

  segment: string = 'filmes'; // valor inicial

  
  
  constructor() {

   
    
  

  }
}
