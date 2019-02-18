import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

  private URL = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }

  public getPoke(name) {
    console.log('API REQ: ', `${this.URL}/${name}/`)
    return this.http.get(`${this.URL}/${name}/`);
  }
}
