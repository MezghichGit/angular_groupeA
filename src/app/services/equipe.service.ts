import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  equipes :string[] = ["Barcelone","Real Madrid","Milan"];
  constructor() { }

  public getEquipes():string[]
  {
     return this.equipes;
  }
}
