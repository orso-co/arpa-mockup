import { AccountHistoryComponent } from './_pages/account-history/account-history.component';
import { AppointmentsComponent } from './_pages/appointments/appointments.component';
import { AttendanceComponent } from './_pages/attendance/attendance.component';
import { ProjectDetailsResolver } from './_resolvers/project-details.resolver';
import { PostListResolver } from './_resolvers/post-list.resolver';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { ProjectListResolver } from './_resolvers/project-list.resolver';
import { PostDetailsResolver } from './_resolvers/post-details.resolver';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ProjectListComponent } from './_pages/projects/project-list.component';
import { ProjectDetailComponent } from './_pages/projects/project-detail/project-detail.component';
import { NewsListComponent } from './_pages/news/news-list.component';
import { NewsDetailsComponent } from './_pages/news/news-details/news-details.component';
import { TravelCostsComponent } from './_pages/travel-costs/travel-costs.component';
import { TicketsComponent } from './_pages/tickets/tickets.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'projects',
        component: ProjectListComponent,
        resolve: { projects: ProjectListResolver }
      },
      {
        path: 'projects/:id',
        component: ProjectDetailComponent,
        resolve: { project: ProjectDetailsResolver }
      },
      {
        path: 'news',
        component: NewsListComponent,
        resolve: { news: PostListResolver }
      },
      {
        path: 'news/:id',
        component: NewsDetailsComponent,
        resolve: { newsItem: PostDetailsResolver }
      },
      {
        path: 'attendance',
        component: AttendanceComponent
      },
      {
        path: 'appointments',
        component: AppointmentsComponent
      },
      {
        path: 'travelcosts',
        component: TravelCostsComponent
      },
      {
        path: 'accounthistory',
        component: AccountHistoryComponent
      },
      {
        path: 'tickets',
        component: TicketsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
