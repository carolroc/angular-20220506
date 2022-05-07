import { HttpClient } from '@angular/commun/http';
import { Injectable } from '@angular/core';


interface Repo{
  id: number;
  full_name: string;
}

@Injectable()
export class GithubserviceService {
  repos: Array<Repo> = [];
  constructor(private http: HttpClient) { }

}