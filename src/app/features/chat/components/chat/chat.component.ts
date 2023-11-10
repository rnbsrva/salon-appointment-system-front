import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChatService} from "../../../../core/service/chat.service";
import {SessionDto} from "../../domain/dto/session.dto";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  isStaff: boolean;
  userId: number;
  salons: Array<number> = [1, 2]

  constructor(
    private readonly activateRouter: ActivatedRoute,
    private readonly chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.activateRouter.params
      .subscribe(params => {
        this.isStaff = params["is_staff"]
        this.userId = this.isStaff ? 1 : 2
      })

    this.just()

    let session: SessionDto = {
      userId: this.userId,
      salons: this.salons,
      channel: this.isStaff ? "staff" : "user"
    }

    console.log(session)
    this.chatService.startSession(session)
  }

  just() {
    document.querySelector('.chat[data-chat=person2]')?.classList.add('active-chat');
    document.querySelector('.person[data-chat=person2]')?.classList.add('active');

    interface Friends {
      list: HTMLUListElement | null;
      all: NodeListOf<HTMLElement> | null;
      name: string;
    }

    interface Chat {
      container: HTMLElement | null;
      current: HTMLElement | null;
      person: string | null;
      name: HTMLElement | null;
    }

    const friends: Friends = {
      list: document.querySelector('ul.people'),
      all: document.querySelectorAll('.left .person'),
      name: '',
    };

    const chat: Chat = {
      container: document.querySelector('.container .right'),
      current: null,
      person: null,
      name: document.querySelector('.container .right .top .name'),
    };

    friends.all?.forEach((f) => {
      f.addEventListener('mousedown', () => {
        if (!f.classList.contains('active')) {
          setActiveChat(f);
        }
      });
    });

    function setActiveChat(f: HTMLElement) {
      const activeElement = friends.list?.querySelector('.active');
      activeElement?.classList.remove('active');
      f.classList.add('active');
      chat.current = chat.container?.querySelector('.active-chat')!;
      chat.person = f.getAttribute('data-chat');
      chat.current?.classList.remove('active-chat');
      chat.container
        ?.querySelector(`[data-chat="${chat.person}"]`)
        ?.classList.add('active-chat');
      friends.name = f.querySelector('.name')?.innerHTML ?? '';
      chat.name!.innerHTML = friends.name;
    }
  }


}
