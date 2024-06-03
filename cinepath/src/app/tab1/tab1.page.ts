import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { ExploreContainerComponent } from '../components/explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AppService } from '../services/appService';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ExploreContainerComponent,FormsModule, CommonModule, IonicModule, NgIf, MovieCardComponent, MovieListComponent],
   
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page implements OnInit{

  segment: string = 'filmes'; // valor inicial
  searchType: string = 'Now Playing';

  idUsuario: string = '1';



  changeSearchType(type: string) {
    console.log(type);
    this.searchType = type;
  }

  onSegmentChange(): void {
    if (this.segment === 'filmes') {
      this.searchType = 'Popular'; // Default search type for movies
    } else if (this.segment === 'series') {
      this.searchType = 'On The Air'; // Default search type for TV shows
    }
  }

  private subscribeToUser(): void {
    this.appService.user$.subscribe(user => {
      if (user) {
        this.idUsuario = user.uid;  // Atualiza o ID do usuário quando o usuário está logado
        console.log('User ID updated:', this.idUsuario);
      } else {
        this.idUsuario = 'Não autenticado';  // Definir como não autenticado ou similar
        console.log('No user logged in.');
      }
    });
  }
  ngOnInit(): void {
    this.subscribeToUser();

  }
  constructor(private appService: AppService) {
   
  }
}
