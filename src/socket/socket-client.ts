import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:9001');
  }

  onModuleInit() {
    this.registerConsumerEvent();
  }

  private registerConsumerEvent() {
    //this.socketClient.emit('newMessage', { message: 'hello' });
    this.socketClient.on('connect', () => {
      console.log('Connected to Gateway');
    });
    this.socketClient.on('onMessage', (payload: any) => {
      console.log('Client socket');
      console.log(payload);
    });
  }
}
