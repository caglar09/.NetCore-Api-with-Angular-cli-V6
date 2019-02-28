import { WebService } from './web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private webservice:WebService) { }

  ngOnInit() {
    this.webservice.getFriendList("5434170068");
  }

}
