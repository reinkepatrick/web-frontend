import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth/auth.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SigninComponent} from './auth/signin/signin.component';
import {GameLibraryComponent} from './game-library/game-library.component';
import {FriendlistComponent} from './friendlist/friendlist.component';
import {DisableService} from './shared/disable.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './auth/auth-guard.service';
import {GameListComponent} from "./game-library/game-list/game-list.component";
import {GameDetailComponent} from "./game-library/game-detail/game-detail.component";
import {LibraryService} from "./game-library/library.service";
import {UsersService} from './shared/users.service';
import {GroupProfileComponent} from './groups/group-profile/group-profile.component';
import {GroupMemberlistComponent} from './groups/group-memberlist/group-memberlist.component';
import {GroupForumComponent} from './groups/group-forum/group-forum.component';
import {GroupForumPostComponent} from './groups/group-forum-post/group-forum-post.component';
import {ChatsComponent} from './chats/chats.component';
import {ChatComponent} from './chats/chat/chat.component';
import {PusherService} from './shared/pusher.service';
import {GroupsService} from "./shared/groups.service";
import {GroupCreateComponent} from './groups/group-create/group-create.component';
import {NotesComponent} from './notes/notes.component';
import {NotesService} from './notes/notes.service';
import { NoteComponent } from './notes/note/note.component';
import { CalendarComponent } from './calendar/calendar.component';
import {CalendarService} from './calendar/calendar.service';
import {CommunityComponent} from './community/community.component';
import {NotificationComponent} from './notification/notification.component';
import { ScheduleListComponent } from './calendar/schedule-list/schedule-list.component';
import { ScheduleAddComponent } from './calendar/schedule-add/schedule-add.component';
import { ScheduleEditComponent } from './calendar/schedule-edit/schedule-edit.component';
import { ScheduleShareComponent } from './calendar/schedule-share/schedule-share.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    ErrorPageComponent,
    SigninComponent,
    GameLibraryComponent,
    FriendlistComponent,
    GameListComponent,
    GameDetailComponent,
    ChatsComponent,
    ChatComponent,
    GroupProfileComponent,
    GroupMemberlistComponent,
    GroupForumComponent,
    GroupForumPostComponent,
    GroupCreateComponent,
    NotesComponent,
    NoteComponent,
    CalendarComponent,
    NotificationComponent,
    CommunityComponent,
    ScheduleListComponent,
    ScheduleAddComponent,
    ScheduleEditComponent,
    ScheduleShareComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UsersService,
    DisableService,
    LibraryService,
    GroupsService,
    PusherService,
    NotesService,
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
