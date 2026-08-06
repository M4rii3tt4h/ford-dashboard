import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  usuario = '';
  senha = '';
  mensagem = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  entrar(){

    if(this.auth.login(this.usuario,this.senha)){

      this.router.navigate(['/home']);

    }else{

      this.mensagem='Usuário ou senha inválidos';

    }

  }

}