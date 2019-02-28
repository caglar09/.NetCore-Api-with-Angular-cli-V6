import { Message } from './Message';
import { WebService } from './web.service';
import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'messages',
    templateUrl:'messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
    constructor(private webservice:WebService, private route:ActivatedRoute){}
   
    ngOnInit() {
        this.route.paramMap.subscribe(params=>{
            this.webservice.getMessage(params.get("userID"));
        })     
    }

    deleteMessage(messageID){
        this.webservice.deleteMessage(messageID);
    }

    
}