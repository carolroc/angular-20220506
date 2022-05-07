import { Injectable } from '@angular/core';

interface Repo{
  id: number;
  full_name: string;
}

@Injectable()
export class GithubserviceService {

  constructor() { }

}