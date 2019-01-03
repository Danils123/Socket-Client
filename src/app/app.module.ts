import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajeChatComponent } from './components/mensaje-chat/mensaje-chat.component';
import { LoadersComponent } from './components/loaders/loaders.component';
// Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { AppRoutingModule } from './app-routing.module';
import { SomepipePipe } from './pipes/somepipe.pipe';


const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    MensajeChatComponent,
    LoadersComponent,
    ListaUsuarioComponent,
    LoginComponent,
    MensajesComponent,
    SomepipePipe
  ],
  imports: [BrowserModule, SocketIoModule.forRoot(config), FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
