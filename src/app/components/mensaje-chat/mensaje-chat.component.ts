import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from '../../interfaces/mensaje.interface';
import { ChatService } from '../../services/chat.service';
import { WebsocketService } from '../../services/websocket.service';
@Component({
  selector: 'app-mensaje-chat',
  templateUrl: './mensaje-chat.component.html',
  styleUrls: ['../chat/chat.component.css']
})
export class MensajeChatComponent implements OnInit {
  @Input() mensaje: Mensaje;
  constructor(public _ws: WebsocketService) { }

  ngOnInit() {}
}
