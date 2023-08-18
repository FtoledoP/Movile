import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup = {} as FormGroup;
  usuario: string = "";

  constructor(private formCreate: FormBuilder, private nav: NavController) { }

  ngOnInit() {

    this.formularioLogin = this.formCreate.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required, 
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(4)
      ])]
    })

  }

  login() {

    if (this.formularioLogin.valid) {
      this.nav.navigateForward('/inicio', {
        queryParams: { usuario: this.usuario },
      });
    }
  }

}
