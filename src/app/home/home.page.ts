import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { createAnimation, Animation } from '@ionic/core';
import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private animation:Animation = createAnimation('')

  constructor(private animationCtrl: AnimationController) {
  
  }

  ngAfterViewInit() {
    // Obtén una referencia al elemento con el ID "card"
    const cardElement = document.querySelector('#card');
  
    // Verifica si el elemento existe antes de continuar
    if (cardElement) {
      this.animation = this.animationCtrl
      .create()
  .addElement(cardElement)
  .duration(2500)
  .iterations(Infinity)
  .keyframes([
    { offset: 0, transform: 'translateX(0px)', opacity: '1' },
    { offset: 0.4, transform: 'translateX(100%)', opacity: '0' },
    { offset: 0.6, transform: 'translateX(-100%)', opacity: '0' },
    { offset: 1, transform: 'translateX(0px)', opacity: '1' }
  ]);
  this.animation.play(); 
    } else {
      console.error('El elemento con el ID "card" no se encontró en el DOM.');
    }
  }



  }


