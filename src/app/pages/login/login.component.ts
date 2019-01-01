import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombre: string;

  constructor(public _ws: WebsocketService, private router: Router) {
    this.nombre = '';
   }

  ngOnInit() {
  }

  ingresar() {
    // console.log(this.nombre);
    if (this.nombre.length === 0) {
      return;
    }
    this._ws.loginWS(this.nombre).then(() => {
      this.router.navigateByUrl('/mensajes');
    }).catch();
  }

}
