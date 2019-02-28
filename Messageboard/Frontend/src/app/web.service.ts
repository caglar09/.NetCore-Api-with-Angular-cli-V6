import { Message } from './Message';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from "@angular/material";
import { error } from '@angular/compiler/src/util';
//import { Subject } from 'rxjs/Rx';
import { Subject } from 'rxjs';
import { Users } from './Users';
//import  'rxjs/add/operator/toPromise';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WebService {
    BASE_URL = "http://localhost:54583/api";
    //BASE_URL = "http://localhost:55451/api";
    private messagesStore: Message[] = [];
    private messageSubject = new Subject();
    messages = this.messageSubject.asObservable();

    friendList:Users[];

    constructor(private http: Http, private sb: MatSnackBar) {
        this.getMessage();
        
    }
    //Messages Func start
    getMessage(user?) {
        try {
            user = (user) ? '/' + user : '';
            this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
                this.messagesStore = response.json();
                this.messageSubject.next(this.messages)
            }, error => {
                this.hadleError("Unable to get messages");
            });

        } catch (error) {

            this.hadleError("Unable to get messages");
        }
    }
    async  postMessage(message: Message) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messagesStore.unshift(response.json());
            this.messageSubject.next(this.messagesStore);
        } catch (error) {
            this.hadleError("Unable to post message")
        }
    }

    async deleteMessage(messageID) {

        var response = await this.http.delete(this.BASE_URL + '/messages/' + messageID).subscribe();
        var index = this.messagesStore.findIndex(x => x.messageID == messageID);
        this.messagesStore.splice(index, 1)
        this.hadleError("deleted message");
    }
    //Messages Func Finsh

    //User Func start
    getFriendList(phoneNumber){
        try {
           var response=this.http.get(this.BASE_URL + "/Friend/"+phoneNumber).subscribe(
               response=>{
                   this.friendList=response.json();
                //    console.log(response.json());
                //    console.log(this.friendList);
               }
           );
           
        } catch (error) {
            this.hadleError("Unable to get frienlist");
        }
    }
    private hadleError(error) {
        console.log(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
}