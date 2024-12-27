import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!';
  nombre = 'Juan Carlos Avella';
  disabled = true;
  img = "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png";
  //Lista de tareas
  tasks = [
    'Instalar Angular Cli',
    'Crear proyecto',
    'Crear Componentes'
  ];

  //Definir objeto
  persona ={
    name:"Juan Carlos Avella G",
    avatar:"https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
  }
}
