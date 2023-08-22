import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, AnimationController, NavController, createAnimation } from '@ionic/angular';
import { Animation } from '@ionic/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  private animation:Animation = createAnimation('')
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute, private alertController: AlertController, private navCtrl: NavController,
    private animationCtrl: AnimationController) { 
    this.route.queryParams.subscribe(params => {
      if (params && params['usuario']) {
        this.usuario = params['usuario'];
      }
    });
  }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    // Obtén una referencia al elemento con el ID "card"
    const nombreIn = document.querySelector('#nombreIn');
    const apellidoIn = document.querySelector('#apellidoIn');
  
    // Verifica si el elemento existe antes de continuar
    if (nombreIn && apellidoIn) {
      this.animation = this.animationCtrl
      .create()
      .addElement(nombreIn)
      .addElement(apellidoIn)
      .duration(500)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(0px)' },
        { offset: 0.33, transform: 'translateX(330px)' }, // Mueve al lado derecho en 0.33 segundos
        { offset: 0.66, transform: 'translateX(-10px)' }, // Mueve al lado izquierdo en 0.33 segundos
        { offset: 1, transform: 'translateX(0px)' }, // Vuelve a la posición original en 0.33 segundos
      ]);
    } else {
      console.error('El elemento con el ID "card" no se encontró en el DOM.');
    }
  }

  limpiar() {
    this.animation.play();
    this.esperarUnSegundo()
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }

  async mostrar() {
    const alert = await this.alertController.create({
      header: 'Usuario: ' + this.usuario,
      message: `Su nombre es  ${this.nombre} ${this.apellido}
      Nivel de educacion: ${this.nivelEducacion}
      Fecha de nacimiento: ${this.fechaNacimiento}`,
      buttons: ['Yes'],
    });

    await alert.present();
  }

  cerrarSesion() {
    this.navCtrl.navigateBack('/home'); 
  }

  async esperarUnSegundo() {
    // Espera un segundo
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // El código aquí se ejecutará después de esperar un segundo
    console.log("Ha pasado un segundo");
  }


}
