import { Injectable } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(public wsSocket: WebsocketService) {}

  sendMessage(mensaje: string) {
    const payload: Mensaje = {
      nombre: this.wsSocket.usuario.nombre,
      mensaje: mensaje
    };
    this.wsSocket.emit('mensaje', payload);
  }

  getMessages() {
    return this.wsSocket.listen('mensaje-nuevo');
  }

  getMensajesPrivados() {
    return this.wsSocket.listen('mensaje-privado');
  }

  getUsuarioActivos() {
    return this.wsSocket.listen('usuarios-activos');
  }

  emitirUsuariosActivos() {
    this.wsSocket.emit('obtener-usuarios');
  }
}
