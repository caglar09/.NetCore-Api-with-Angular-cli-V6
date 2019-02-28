import { Message } from './Message';
import { WebService } from './web.service';
import { Component} from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
    selector: 'new-message',
    templateUrl:'new-message.component.html'
})
export class NewMessageComponent {


    constructor(private webservice:WebService ){
        
    }
    
    message:Message={
        message:"",
        userID:UUID.UUID(),
        messageID:UUID.UUID(),
        messageTime:new Date
    }

    post(){
        this.webservice.postMessage(this.message);
        this.message.message="";
    }
    
   
}