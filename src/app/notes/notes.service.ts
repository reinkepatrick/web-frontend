import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Note} from './note.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NotesService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  public getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('https://pr0jectzer0.ml/api/notes?token=' + this.auth.getToken());
  }

  public getNote(id: number): Observable<Note> {
    return this.http.get<Note>('https://pr0jectzer0.ml/api/note/' + id + '?token=' + this.auth.getToken());
  }

  public setNote(id: number, titel: string, text: string) {
    return this.http.put('https://pr0jectzer0.ml/api/note/' + id + '?token=' + this.auth.getToken(), {
      'titel': titel,
      'text': text
    });
  }
}

