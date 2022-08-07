import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

const config: SocketIoConfig = {
	url: environment.socketUrl, // socket server url;
	options: {
		transports: ['websocket']
	}
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
