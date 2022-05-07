import { HttpClient } from '@angular/commun/http';
import { Injectable } from '@angular/core';


interface Repo{
  id: number;
  full_name: string;
}

@Injectable({
  provideIn: 'root'
})
export class GithubserviceService {
  repos: Array<Repo> = [];
  constructor(private http: HttpClient) { }

  update(){
    this.http.get<Array<Repo>>('https://api.github.com/users/carolroc/repos').subscribe(data => {
      this.repos = data;
    })
  }

}