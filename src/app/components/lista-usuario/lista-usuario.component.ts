import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  public usuariosActivosObs: Observable<any>;
  public activo: boolean;

  constructor(public _cs: ChatService) {
    this.activo = false;
  }

  ngOnInit() {
    this.usuariosActivosObs = this._cs.getUsuarioActivos();
    this._cs.emitirUsuariosActivos();
  }

  activarChat() {
    this.activo = !this.activo;
  }
}
