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
  idUsuario: string = '1';
  

  ngOnInit(): void {
    this.addMockReview();
    this.subscribeToUser();
  }

  async addMockReview(): Promise<void> {
    try {
      await this.appService.addMockReview();
    } catch (error) {
      console.error('Error adding mock review: ', error);
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
  
}
