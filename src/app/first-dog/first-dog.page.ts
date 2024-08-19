import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { dog } from '../entities';

@Component({
  selector: 'app-first-dog',
  templateUrl: './first-dog.page.html',
  styleUrls: ['./first-dog.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FirstDogPage implements OnInit {
  dog!:dog[]

  constructor() { }
  showform=false;

  ngOnInit() {
    this.dog =[{
      id:1,
      name :'simba',
      breed: 'corgi',
      birthdate:'26-12-2027'
    }
  ]
}
}