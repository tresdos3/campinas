import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Valor: String = 'estas es la pagina de inicio';
  images: Array<string> = ['sports', 'abstract', 'people', 'transport', 'city', 'technics', 'nightlife', 'animals'];
  constructor(private titulo: Title) {
    this.titulo.setTitle('Inicio');
   }

  ngOnInit() {
  }

}
