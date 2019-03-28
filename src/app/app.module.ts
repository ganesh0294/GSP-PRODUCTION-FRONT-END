import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TabsComponent } from './tabs/tabs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProgressComponent } from './progress/progress.component';
import { HomeComponent } from './home/home.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { UserService } from './shared/user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AdmindashboardComponent } from './superadmin/admindashboard/admindashboard.component';
import { AdminfooterComponent } from './superadmin/adminfooter/adminfooter.component';
import { AdminnavbarComponent } from './superadmin/adminnavbar/adminnavbar.component';
import { AdminsidebarComponent } from './superadmin/adminsidebar/adminsidebar.component';
import { AdminslistComponent } from './superadmin/adminslist/adminslist.component';
import { SuviewprofileComponent } from './superadmin/suviewprofile/suviewprofile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminUserManagerComponent } from './superadmin/admin-user-manager/admin-user-manager.component';
import { AdminPaymentGetwayComponent } from './superadmin/admin-payment-getway/admin-payment-getway.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule,  } from 'ngx-toastr';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { ApiService } from './shared/services/api.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // SidebarComponent,
    FooterComponent,
    FormsComponent,
    DashboardComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    TabsComponent,
    CarouselComponent,
    ProgressComponent,
    HomeComponent,
    SuperadminComponent,
    UserProfileComponent,

    AdmindashboardComponent,
    AdminfooterComponent,
    AdminnavbarComponent,
    AdminsidebarComponent,
    AdminsidebarComponent,
    AdminslistComponent,
    SuviewprofileComponent,
    LoginComponent,
    RegisterComponent,
    AdminUserManagerComponent,
    AdminPaymentGetwayComponent,
    UserForgotPasswordComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [UserService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
