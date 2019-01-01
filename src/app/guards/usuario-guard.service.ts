import { Injectable } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import {CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  constructor(public _ws: WebsocketService, private routes: Router) { }

  canActivate() {
    if (this._ws.obtenerUsuario()) {
      return true;
    } else {
      this.routes.navigateByUrl('/');
      return false;
    }
  }
}
