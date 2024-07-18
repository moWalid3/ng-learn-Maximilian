import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = signal<string[]>([]);
  allMessages = this.messages.asReadonly();
  
  addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }

  // messages$ = new BehaviorSubject<string[]>([]);
  // allMessages: string[] = [];
  // addMessage(message: string) {
  //   this.allMessages.push(message);
  //   this.messages.next([...this.allMessages]);
  // }
}
