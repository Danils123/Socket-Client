import { Injectable } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(public wsSocket: WebsocketService) {}

  sendMessage(mensaje: string) {
    const payload = {
      de: 'Daniel',
      cuerpo: mensaje
    };
    this.wsSocket.emit('mensaje', payload);
  }

  getMessages() {
    return this.wsSocket.listen('mensaje-nuevo');
  }
}
