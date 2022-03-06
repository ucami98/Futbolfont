import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JugadorService } from 'src/app/service/jugador.service';
import { EquipoService } from 'src/app/service/equipo.service';
import { io } from 'socket.io-client';
import { config } from '../../config/config';
import { WebsocketService } from 'src/app/service/webSockets';
const socket = io(config.url)


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  form: FormGroup
  name: AbstractControl
  numero: AbstractControl
  position: AbstractControl
  team: AbstractControl
  sub = false
  reverseData: any
  config = config
  listEquipos: any[] = []

  constructor(private fb:FormBuilder, 
    private jugadorService:JugadorService,
    private equipoService:EquipoService,
    private webSocket:WebsocketService) { 
      this.form = this.fb.group({
      name:['', Validators.required],
      numero:['', Validators.required],
      position:['', Validators.required],
      team:['', Validators.required],
    })
    this.name = this.form.controls['name']
    this.numero = this.form.controls['numero']
    this.position = this.form.controls['position']
    this.team = this.form.controls['team']
    this.obtenerRespuesta()
   }

  ngOnInit(): void {
  
  }

  get f(){
    return this.form.controls
  }

  enviarJugador(){
    if(this.form.invalid)
     return 
     this.jugadorService.save( this.form.value).subscribe((res:any)=>{
       if(res.status){
         this.webSocket.saveNewJugador(this.form.value)
       }
       this.form.reset();

     })
     console.log(this.jugadorService)
  }

  obtenerRespuesta(){
    socket.on('respuesta',(data)=>{
      console.log(data)
    })
  }
  reset(){
    this.form.reset()
   }

  

}
