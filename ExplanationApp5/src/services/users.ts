import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

export interface User {
  id: number,
  name: string,
  birthDate: string,
  sex: string,
  phone: number,
  email: string
}

@Injectable()
export class UsersService {

  private readonly user1Endpoint: string;

  constructor(private http: HttpClient) {

    this.user1Endpoint = 'http://localhost:3000/users/1';
  }

  getLocalUser(): Subject<User> {

    const userAvailable = new Subject<User>();

    setTimeout(() => {

      userAvailable.next({
        id: 1,
        name: 'Jose Antonio Postigo',
        birthDate: new Date('1985-05-10').toISOString(),
        sex: 'male',
        phone: 2324,
        email: 'japostigo@atsistemas.com'
      });

    }, 2000);

    return userAvailable;
  }

  getRemoteUser(): Observable<User> {

    return this.http.get(this.user1Endpoint)
      .map((data: any) => {
        data.birthDate = new Date(data.birthDate).toISOString();
        return data;
      })
  }

  saveRemoteUser(user: User): Observable<User> {

    user.birthDate = user.birthDate.split('T')[0];

    return <Observable<User>>
      this.http.put(this.user1Endpoint, user);
  }
}
