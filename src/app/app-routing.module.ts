import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourComponent } from './tour/tour.component';
// import {HomeComponent} from "./home/home.component";
// import {AboutComponent} from "./about/about.component";
// import {CourseComponent} from "./course/course.component";

const routes: Routes = [
    {
        path: "",
        component: LoginComponent

    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        children: [
            { path : '', component: TourListComponent },
            { path : 'tour-detail/:id', component : TourComponent},
            // { path : 'edit/:id', component : EditComponent }
        ]
    },
    // {
    //     path: 'courses/:id',
    //     component: CourseComponent
    // },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
//   imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
