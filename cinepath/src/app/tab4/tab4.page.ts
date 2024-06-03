import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonList, IonItem, IonThumbnail, IonLabel, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../components/explore-container/explore-container.component';
import { AppService } from '../services/appService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { } from '@ionic/angular/standalone';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonButton, ExploreContainerComponent, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonList, IonItem, IonThumbnail, IonLabel, IonCardTitle, IonCardContent],
})
export class Tab4Page {
  constructor(private appService: AppService, private route: Router) {}

  logout() {
    this.appService.logoutUser();
    this.route.navigate(['/login']);
  }
  
}
