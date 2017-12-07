import { Component, OnInit } from '@angular/core';
import { DisableService } from '../shared/disable.service';
import {animate, group, state, style, transition, trigger} from '@angular/animations';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css'],
  animations: [
    trigger('bodyState', [
      state('closed', style({height: '40px', backgroundColor: '#FFFFFF'})),
      state('opened', style({height: 'calc(100% - 58px)'})),
      transition('closed <=> opened', [
        animate(250)
      ])
    ]),
    trigger('body', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class FriendlistComponent implements OnInit {
  friends: User[];
  body: string = 'in';
  state: string = 'closed';
  isFriendsSelected: boolean = true;
  isGroupsSelected: boolean = false;

  constructor(private disableService: DisableService, private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.disableService.disable.subscribe(
      data => {
        if(data) {
          this.state = 'closed';
        }
      }
    );

    this.http.get<User[]>('https://pr0jectzer0.ml/api/friends?token=' + this.auth.getToken())
      .subscribe(data => {
        this.friends = data['friends'];
    });
  }

  onClicked() {
    if(this.state == 'closed') {
      this.state = 'opened';
    }
  }

  onFriendsView() {
    if(!this.isFriendsSelected) {
      this.isGroupsSelected = false;
      this.isFriendsSelected = true;
    }
  }

  onGroupsView() {
    if(!this.isGroupsSelected) {
      this.isFriendsSelected = false;
      this.isGroupsSelected = true;
    }
  }
}
