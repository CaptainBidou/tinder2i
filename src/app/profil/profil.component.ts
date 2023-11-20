import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent {

  constructor() { }
  development = false;


  rotate(number: number) {
    console.log(number);


  }

}
