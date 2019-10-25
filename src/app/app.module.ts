import { OfficeAttendanceListComponent } from './_pages/dashboard/office-attendance-list/office-attendance-list.component';
import { LoadingService } from './_services/loading.service';
import { PostDetailsResolver } from './_resolvers/post-details.resolver';
import { ProjectDetailsResolver } from './_resolvers/project-details.resolver';
import { PostListResolver } from './_resolvers/post-list.resolver';
import { WordpressService } from './_services/wordpress.service';
import { FakeDataService } from './_services/fake-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BsDropdownModule,
  TabsModule,
  BsDatepickerModule,
  PaginationModule,
  ButtonsModule,
  ModalModule
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { ProjectListResolver } from './_resolvers/project-list.resolver';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { AttendanceComponent } from './_pages/attendance/attendance.component';
import { AppointmentsComponent } from './_pages/appointments/appointments.component';
import { AccountHistoryComponent } from './_pages/account-history/account-history.component';
import { QrCodeComponent } from './_pages/dashboard/qr-code/qr-code.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './_components/nav/nav.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ProjectListComponent } from './_pages/projects/project-list.component';
import { ProjectCardComponent } from './_pages/projects/project-card/project-card.component';
import { NewsListComponent } from './_pages/news/news-list.component';
import { NewsCardComponent } from './_pages/news/news-card/news-card.component';
import { NewsDetailsComponent } from './_pages/news/news-details/news-details.component';
import { ProjectDetailComponent } from './_pages/projects/project-detail/project-detail.component';
import { LoadingComponent } from './_components/loading/loading.component';
import { TravelCostsComponent } from './_pages/travel-costs/travel-costs.component';
import { TicketsComponent } from './_pages/tickets/tickets.component';
import { MessageListComponent } from './_pages/dashboard/message-list/message-list.component';
import { SurveyListComponent } from './_pages/dashboard/surveys/survey-list/survey-list.component';
import { ChatComponent } from './_components/chat/chat.component';
import { ChatItemComponent } from './_components/chat/chat-item/chat-item.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

registerLocaleData(localeDe);

const COMPONENTS = [
  AppComponent,
  NavComponent,
  DashboardComponent,
  ProjectListComponent,
  ProjectCardComponent,
  NewsListComponent,
  NewsCardComponent,
  NewsDetailsComponent,
  ProjectDetailComponent,
  LoadingComponent,
  AttendanceComponent,
  AppointmentsComponent,
  TravelCostsComponent,
  AccountHistoryComponent,
  TicketsComponent,
  QrCodeComponent,
  MessageListComponent,
  SurveyListComponent,
  ChatComponent,
  ChatItemComponent,
  OfficeAttendanceListComponent
];

@NgModule({
  declarations: [...COMPONENTS, TimeAgoPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    QRCodeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    FakeDataService,
    WordpressService,
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    ProjectListResolver,
    PostListResolver,
    ProjectDetailsResolver,
    PostDetailsResolver,
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
