import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient){}

  public listFromUser(userName: string): any{
    return this.http.get<Photo[]>(API + '/' + userName + '/photos');
  }

  public listFromUserPaginated(userName: string, page: number): any {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(API + '/' + userName + '/photos', { params });
  }

}
