import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element';
import { AppService } from './services/appService';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.addMockReview();
  }

  async addMockReview(): Promise<void> {
    try {
      await this.appService.addMockReview();
      console.log('Mock review added successfully');
    } catch (error) {
      console.error('Error adding mock review: ', error);
    }
  }
}
