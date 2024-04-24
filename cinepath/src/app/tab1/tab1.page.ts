import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
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
  imports: [ExploreContainerComponent,FormsModule, CommonModule, IonicModule, NgIf, MovieCardComponent, MovieListComponent],
   
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {

  segment: string = 'filmes'; // valor inicial
  searchType: string = 'Now Playing';

  changeSearchType(type: string) {
    console.log(type);
    this.searchType = type;
  }


  
  
  constructor() {

   
    
  

  }
}
