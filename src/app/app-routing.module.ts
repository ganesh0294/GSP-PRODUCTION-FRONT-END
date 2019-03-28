import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { AuthGuard } from '../app/auth/auth.guard';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { ProgressComponent } from './progress/progress.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdmindashboardComponent } from './superadmin/admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { SuviewprofileComponent } from './superadmin/suviewprofile/suviewprofile.component';
import { AdminslistComponent } from './superadmin/adminslist/adminslist.component';
import { RegisterComponent } from './register/register.component';
import { AdminUserManagerComponent } from './superadmin/admin-user-manager/admin-user-manager.component'
import { AdminPaymentGetwayComponent } from './superadmin/admin-payment-getway/admin-payment-getway.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
// import { UsersdashboardComponent } from './admins/usersdashboard/usersdashboard.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},

  {path: 'userForgotPassword', component: UserForgotPasswordComponent},
  // path defins for the superadmins
  { path: 'admindashboard', component: SuperadminComponent, canActivate: [AuthGuard],
    children: [{ path: '', component: AdmindashboardComponent }]
  },
  {path: 'viewprofile', component: SuperadminComponent, canActivate: [AuthGuard],
  children: [{path: '', component: SuviewprofileComponent}]
  },
  {path: 'userslist', component: SuperadminComponent, canActivate: [AuthGuard],
  children: [{path: '', component: AdminslistComponent}]
  },
  {path: 'courseManager', component: SuperadminComponent, canActivate: [AuthGuard],
  children: [{path: '', component: AdminUserManagerComponent}]
  },
  {path: 'adminPayment', component: SuperadminComponent, canActivate: [AuthGuard],
  children: [{path: '', component: AdminPaymentGetwayComponent}]
  },
   // path defins for the admins
  //  {path: 'admins', component: AdminsComponent,
  //   children: [ {path: '', component: UsersdashboardComponent}]},
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },

  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },

  { path: 'pagination', component: PaginationComponent },

  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'progress', component: ProgressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// // import { DashboardComponent } from './dashboard/dashboard.component';
// import { FormsComponent } from './forms/forms.component';
// import { ButtonsComponent } from './buttons/buttons.component';
// import { TablesComponent } from './tables/tables.component';
// import { IconsComponent } from './icons/icons.component';
// import { TypographyComponent } from './typography/typography.component';
// import { AlertsComponent } from './alerts/alerts.component';
// import { AccordionsComponent } from './accordions/accordions.component';
// import { BadgesComponent } from './badges/badges.component';
// import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
// import { PaginationComponent } from './pagination/pagination.component';
// import { DropdownComponent } from './dropdown/dropdown.component';
// import { TabsComponent } from './tabs/tabs.component';
// import { TooltipsComponent } from './tooltips/tooltips.component';
// import { CarouselComponent } from './carousel/carousel.component';
// import { ProgressComponent } from './progress/progress.component';
// import { SuperadminComponent } from './superadmin/superadmin.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { AuthGuard } from './auth/auth.guard';

// import { AdmindashboardComponent } from './superadmin/admindashboard/admindashboard.component'
// import { SuviewprofileComponent } from './superadmin/suviewprofile/suviewprofile.component';


// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   // { path: 'admindashboard', component: SuperadminComponent},
//   { path: 'admindashboard', component: AdmindashboardComponent },
//   { path: 'viewprofile',component : SuviewprofileComponent },
//   { path: 'userprofile', component: UserProfileComponent },
//   // { path: 'dashboard', component: DashboardComponent },
//   { path: 'forms', component: FormsComponent },
//   { path: 'buttons', component: ButtonsComponent },
//   { path: 'tables', component: TablesComponent },
//   { path: 'icons', component: IconsComponent },
//   { path: 'typography', component: TypographyComponent },
//   { path: 'alerts', component: AlertsComponent },
//   { path: 'accordions', component: AccordionsComponent },
//   { path: 'badges', component: BadgesComponent },
//   { path: 'breadcrumbs', component: BreadcrumbsComponent },
//   { path: 'pagination', component: PaginationComponent },
//   { path: 'dropdowns', component: DropdownComponent },
//   { path: 'tabs', component: TabsComponent },
//   { path: 'tooltips', component: TooltipsComponent },
//   { path: 'carousel', component: CarouselComponent },
//   { path: 'progress', component: ProgressComponent },
//   // { path: 'signup', component: UserComponent,
//   //   children: [{ path: '', component: SignUpComponent }]
//   // },
  
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


