import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Person } from './person';

const API = 'http://localhost:3000';

@Injectable()
export class PeopleService {
  private entrypoint = `${API}/people`;  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  find(): Promise<Person[]> {
    return this.http.get(this.entrypoint)
    .toPromise()
    .then(response => response.json() as Person[])
    .catch(this.handleError);
  }
  findOne(id: number): Promise<Person> {
    const url = `${this.entrypoint}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Person)
    .catch(this.handleError);
  }
  update(item: Person): Promise<Person> {
    const url = `${this.entrypoint}/${item._id}`;
    console.log(url, item);
    return this.http
    .put(url, JSON.stringify(item), {headers: this.headers})
    .toPromise()
    .then(() => item)
    .catch(this.handleError);
  }
  create(name: string, age: number): Promise<Person> {
    return this.http
    .post(this.entrypoint, JSON.stringify({ name, age }), {headers: this.headers})
    .toPromise()
    .then(res => res.json() as Person)
    .catch(this.handleError);
  }
  delete(id: string): Promise<void> {
    const url = `${this.entrypoint}/${id}`;
    return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
