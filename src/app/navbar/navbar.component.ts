import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  public user_name;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig, private userService : UserService, private router : Router) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
      this.user_name = localStorage.getItem('user_name');
      //localStorage.setItem('user_name', user_name);
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }

}
