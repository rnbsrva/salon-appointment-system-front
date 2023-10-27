import {Injectable} from '@angular/core';


declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public stompClient;

  constructor() {
    this.initializeWebSocketConnection()
  }

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:7000/api/v1/chat/akerke';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);

     this.stompClient.connect({}, (frame) => {
        console.log('Connected: ' + frame)

        this.stompClient.send('/on_user_session_started', {}, JSON.stringify(
            {
                userId: 1,
                salons: [1]
            }
        ))
        const message = {
            content: 'hello test message',
            fromStuff: true,
            salonId: 1,
            userId: 1,
            fileIdList: []
        }

        this.stompClient.send('/on_message', {}, JSON.stringify(message))

        this.stompClient.subscribe('/topic/user/message/1', res => {
            console.log('message from server by ws', res)
        })


        this.stompClient.send('/on_user_session_closed', {}, JSON.stringify(
            {
                userId: 1,
                salons: [1]
            }
        ))

    })
  }

}

