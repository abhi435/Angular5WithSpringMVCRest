import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { User } from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  private user: User
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUserData().subscribe(
      user => {
        this.user = user;
      },
      error => {
        console.log(error);
      }
    );
  }
}