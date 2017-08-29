import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverSuccess: '';

  constructor() {
  	this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
  	return this.serverStatus;
  }

  getColour() {
  	return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerSuccess() {
  	return this.serverStatus === 'online' ? true : false;
  }
}
