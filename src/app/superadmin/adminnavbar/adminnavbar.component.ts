import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class AdminnavbarComponent implements OnInit {
  user_name;
  public sidebarOpened = false;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig, private userService: UserService, private router: Router) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
    let userData = localStorage.getItem('user_data');
    var obj = JSON.parse(userData);
    this.user_name= obj.user_name;
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }

}
