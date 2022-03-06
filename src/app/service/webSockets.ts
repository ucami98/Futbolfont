import { Injectable } from '@angular/core';
import { io, Socket} from 'socket.io-client';
import { config } from '../config/config';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WebsocketService{
  config = config
  socket: Socket 

  constructor()
  {
    this.socket= io(this.config.url)
  }

  saveNewJugador(data: any)
  {
    this.socket.emit('newjugador', data)
  }
  
  saveNewTeam(data: any)
  {
    this.socket.emit('newteam', data)
  }
}
