import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MovieDb } from 'src/app/services/movieDb';
import { environment } from 'src/environments/environment';
import { IonList, IonItem, IonThumbnail, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { MovieResult, TvResult } from 'src/app/types/request-types';
import { getUrl } from 'ionicons/dist/types/components/icon/utils';
import { list } from 'ionicons/icons';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, 
    CommonModule, // Import CommonModule here
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonCard
  ]
})
export class MovieCardComponent implements OnInit {
  @Input() movie = {} as MovieResult 
  @Input() tvShow = {} as TvResult
  @Input() listType: string = '';

  get isMovie(): boolean {
    return this.listType === 'Movies';
  }
  
  get isTvShow(): boolean {
    return this.listType === 'TVShows';
  }


  getImgUrl = (path?: string) => `https://image.tmdb.org/t/p/w500${path}`

  

 

  ngOnInit() {
    // console.log(this.movie)
    console.log(this.tvShow)
    console.log(this.listType)
    console.log(this.isMovie)
    
  }
}
