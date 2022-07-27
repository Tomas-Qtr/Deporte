import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const $btnSignIn= document.querySelector('.sign-in-btn')
     const $btnSignUp = document.querySelector('.sign-up-btn')
     const $signUp = document.querySelector('.sign-up')
     const $signIn  = document.querySelector('.sign-in');

     const lolete1 = $signUp?.classList
     const lolete2 = $signIn?.classList
document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        lolete1?.toggle('active');
        lolete2?.toggle('active')
    }
});
  }

}
