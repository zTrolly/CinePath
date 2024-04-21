import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-trunk-text',
  templateUrl: './trunk-text.component.html',
  styleUrls: ['./trunk-text.component.scss'],
  standalone: true,
  imports: [IonButton]
})
export class TrunkTextComponent {

  @Input() text: string = '';
  @Input() maxLength: number = 100;
  isTruncated: boolean = true;

  toggleText() {
    this.isTruncated = !this.isTruncated;
  }

  get displayText() {
    return this.isTruncated ? this.text.slice(0, this.maxLength) + '...' : this.text;
  }

  get toggleButtonLabel() {
    return this.isTruncated ? 'Ler mais' : 'Ler menos';
  }

}
