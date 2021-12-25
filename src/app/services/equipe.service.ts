import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  //equipes :string[] = ["Barcelone","Real Madrid","Milan"];
  constructor(private http:HttpClient) { }

  public getEquipes()
  {
     //return this.equipes;
     return this.http.get("http://127.0.0.1:83/equipes");
  }
}
