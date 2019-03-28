import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router';
import { SuperadminComponent } from '../superadmin/superadmin.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  public user_name;
  public profileStatus : boolean;
  constructor(private userService : UserService, private router: Router, private supercomp : SuperadminComponent) { }

  ngOnInit() {
    this.user_name = localStorage.getItem('user_name');
  }

  // clickProfile(){
  //   this.profileStatus = true;
  //   this.userService.profileDasbordStatus(this.profileStatus);
  // }

  routeProfile() {
    this.supercomp.ngOnInit();
  }

  // routeDashboard() {
  //   this.profileStatus = false;
  //   this.userService.profileDasbordStatus(this.profileStatus);
  //   this.supercomp.ngOnInit();
  // }

}
