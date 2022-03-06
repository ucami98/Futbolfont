import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  config = config
  
  constructor(private http:HttpClient) { }

  save(data: any){
    return this.http.post(this.config.url+"/api/jugadores/", data)
}

update(data: any){
  return this.http.put(this.config.url+"/api/jugadores/", data)
}

get(){
    return this.http.get(this.config.url+"/api/jugadores/")
}

getById(id: any | string ){
  return this.http.get(this.config.url+`/api/jugadores/${id}`)
}

search(data: any){
    return this.http.post(this.config+"api/jugadores/search", data)
}

findById(data: any){
 return this.http.post(this.config+"api/jugadores/findById", data)
}

deleteById(id: any | string ){
  return this.http.delete(this.config.url+`/api/jugadores/${id}`)
}

}