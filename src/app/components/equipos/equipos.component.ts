import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { config } from '../../config/config';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  team1= "";
  team2= "";
  listEquipos:any[] = [];
  listEquiposNuevo:any[] = [];
  

  constructor() { 
   }

  ngOnInit(): void {
  }
 
  
  agregarEquipo(){
    this.listEquipos.push({
        team1:this.team1,
        team2:this.team2
      })
    console.log(this.agregarEquipo)
    
  }

  eliminar(){
    this.listEquipos = this.listEquiposNuevo
  }

}
