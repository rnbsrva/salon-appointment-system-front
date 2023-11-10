import {Injectable} from '@angular/core';
import {MessageDto} from "../../features/chat/domain/dto/message.dto";
import {SessionDto} from "../../features/chat/domain/dto/session.dto";


declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient;
  private serverUrl = 'http://localhost:7000/api/v1/chat/akerke';

  constructor() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, (fr) => {
      console.log('successfully ws connection', fr)
    })
  }

  send(
    messageRequest: MessageDto
  ) {
    this.stompClient.send('/on_message', {}, JSON.stringify(messageRequest))
  }

  startSession(
    sessionDTO: SessionDto
  ) {
    let userId = sessionDTO.userId
    let salons = sessionDTO.salons;
    this.stompClient.send(`/on_${sessionDTO.channel}_session_started`, {}, JSON.stringify({
      userId: userId, salons: salons
    }))
  }

  closeSession(
    sessionDTO: SessionDto
  ) {
    let userId = sessionDTO.userId
    let salons = sessionDTO.salons;
    this.stompClient.send(`/on_${sessionDTO.channel}_session_closed`, {}, JSON.stringify({
      userId: userId, salons: salons
    }))
  }


}

