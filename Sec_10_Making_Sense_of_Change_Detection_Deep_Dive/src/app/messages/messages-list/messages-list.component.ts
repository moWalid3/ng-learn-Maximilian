import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss',
  imports: [AsyncPipe],
  /*
    this make zone.js to don't check this component and it's siblings without there are any inputs or events changes in these
    so if this component has an input or event it will be changing if this input or this event change but if not changing it will not checking it by zone.js
    so if there is not any inputs or events here => zone.js don't work here else you use signal
    so if you don't use signal and it's not have an input or event and you need the data here
    to be updated ==> you must use BehaviorSubject() in service and use these 
    lines code below that be commented
    -------------
    the easy and best way in this status (there is not any inputs and events and need to update data here automatic)
    is use async pipe with BehaviorSubject() in service like below code
  */
  changeDetection: ChangeDetectionStrategy.OnPush,
  // so this above line is power good to improve performance and it's work safely with signals
})
export class MessagesListComponent {
  private messagesService = inject(MessagesService);
  messages = this.messagesService.allMessages; // signal

  
  // messages$ = this.messagesService.messages; // without signals with async pipe => best way
  
  // - old way without async pipe
  // private cdRef = inject(ChangeDetectorRef);
  // ngOnInit(): void {
  //   this.messagesService.messages$.subscribe((messages) => {
  //     this.messages = messages;
  //     this.cdRef.markForCheck(); // so this line tell changeDetection=>OnPush to look at this subscribe
  //   })
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
