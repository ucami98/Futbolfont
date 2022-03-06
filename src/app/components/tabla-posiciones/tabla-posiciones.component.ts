import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/service/jugador.service';
import { io, Socket} from 'socket.io-client';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.css']
})
export class TablaPosicionesComponent implements OnInit {

  updatedSend: any
  reverseData: any
  listJugador: any[] = []
  
  config = config
  socket: Socket 
 
  constructor(private jugadorService: JugadorService) {
                this.socket = io(this.config.url)
                this.obtenerRespuesta()
              }

  ngOnInit(): void {
    this.getJugadores()
    this.listJugador = []
    this.obtenerRespuesta()
    
  }

  
  obtenerRespuesta(){
    this.socket.on('emitiendo',(data)=>{
      this.getJugadores()
    })
  }

  getJugadores(){
    this.jugadorService.get().subscribe((res:any)=>{
      res.forEach((i:any) => {
    
      });
      this.listJugador = res
      ;
    })
  }

  search(event: any){
    this.jugadorService.search({ name: event.target.value }).subscribe((res:any)=>{
      res.forEach((i:any) => {
        i.status = false
      });
      this.listJugador = res
    })
  }

  reset(index: any){
    console.log( this.reverseData )
   }
   

  edit(item?: any, index?: any){
    if(typeof this.updatedSend === "object" && this.updatedSend != null ){
      this.update()
    }else{
        this.listJugador.forEach(i => {
        i.status = false
        i.textAction = "Editar"
        if(i._id == item._id){
          i.status = true
          i.textAction = "Guardar"
        }
      });
    }
  }

  change(item:any, event: any, index: any , propiedad: any){
    this.listJugador[index][propiedad] = event.target.value
    this.updatedSend = this.listJugador[index] 
  }
 
  update(){
    this.jugadorService.update(this.updatedSend).subscribe((res:any)=>{
      console.log( res )
      this.updatedSend = null
    })
  }

  delete(_id:string){
    console.log( _id )
    this.jugadorService.deleteById(_id).subscribe((res:any)=>{
        
    })
  }


}

