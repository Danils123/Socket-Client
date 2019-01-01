import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus;
  public usuario: Usuario;

  constructor(private socket: Socket) {
    this.socketStatus = false;
    this.checkStatus();
    this.cargarStorage();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });
    this.socket.on('disconnect', () => {
      console.log('Desconectado al servidor');
      this.socketStatus = false;
    });
  }

  emit(evento: string, payload?: any, callback?: Function) {
    console.log('Emitiendo', evento);
    this.socket.emit(evento, payload, callback);
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }

  loginWS(nombre?: string) {
    return new Promise((resolve, reject) => {
      this.emit('configurar-usuario', {nombre}, (resp) => {
        this.usuario = resp.usuario;
        this.guardarStorage();
        resolve(resp);
      });
    });
  }

  obtenerUsuario() {
    return this.usuario;
  }

  guardarStorage() {
    sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

  cargarStorage() {
    if (sessionStorage.getItem('usuario')) {
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.loginWS( this.usuario.nombre);
    }
  }
}
