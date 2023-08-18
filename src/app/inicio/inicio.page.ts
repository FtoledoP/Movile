import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute, private alertController: AlertController, private navCtrl: NavController) { 
    this.route.queryParams.subscribe(params => {
      if (params && params['usuario']) {
        this.usuario = params['usuario'];
      }
    });
  }

  ngOnInit() {
  }

  limpiar() {
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


}
