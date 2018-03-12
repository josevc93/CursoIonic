import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export interface  User {
  id: number,
  name: string,
  birthDate: string,
  sex: string,
  phone: number,
  email: string
}

@Injectable()

export class UserService {
  private user: User;

  constructor(private http: HttpClient){
  }

  getUser(): Observable<User> {
    return <Observable<User>> this.http.get('http://localhost:3000/users/1');
  }
/*
  getUser(){
    setTimeout(()=> {
      return this.user;
    }, 2000);

  }*/
/*
  getUser(): Observable<FruitItems[]> {
    return <Observable<FruitItems[]>> this.http.get('http://localhost:3000/fruits');
  }*/

}
