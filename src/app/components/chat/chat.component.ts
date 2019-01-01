import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';
import { Mensaje } from '../../interfaces/mensaje.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto: string;
  mensajesSubscription: Subscription;
  mensajes: Mensaje[];
  constructor(private chatService: ChatService) {
    this.texto = '';
    this.mensajes = [];
    setTimeout(() => {
      document.getElementById('loader').setAttribute('hidden', 'hidden');
      document.getElementById('lista').removeAttribute('hidden');
      document.getElementById(
        'app-mensajes'
      ).scrollTop = document.getElementById('app-mensajes').scrollHeight;
    }, 2000);
  }

  ngOnInit() {
    this.mensajesSubscription = this.chatService
      .getMessages()
      .subscribe((msg: Mensaje) => {
        console.log(msg);
        this.mensajes.push(msg);
      });
  }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    let msj = this.texto;
    msj = msj.split('\n').join('');
    if (this.texto.length === 0) {
      return;
    }
    console.log(msj);
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }
}
