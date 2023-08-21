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
        .duration(1500)
        .iterations(Infinity)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.2');
    } else {
      console.error('El elemento con el ID "card" no se encontró en el DOM.');
    }
  }
  
  

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }

  

  }


