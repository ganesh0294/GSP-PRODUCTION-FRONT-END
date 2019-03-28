import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.scss']
})
export class AdminsidebarComponent implements OnInit {
  user_name;
  user_position;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    let userData = localStorage.getItem('user_data');
    var obj = JSON.parse(userData);
    this.user_name= obj.user_name;
    this.user_position= obj.user_position;
  }

}
