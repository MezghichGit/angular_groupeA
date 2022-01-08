import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  urlEquipes: string = "http://127.0.0.1:83/equipes";
  //equipes :string[] = ["Barcelone","Real Madrid","Milan"];
  equipe: any;
  constructor(private http: HttpClient) { }

  public getEquipes() {
    //return this.equipes;
    return this.http.get(this.urlEquipes);
  }

  createEquipe(myform) {
    this.equipe = {
      'name': myform.value.equipeName,
      'country': myform.value.equipeCountry
    }
    return this.http.post(this.urlEquipes, this.equipe);
  }
  updateEquipe(myObj) {
    return this.http.put(this.urlEquipes + '/' + myObj['_id'], myObj);
  }
  deleteEquipe(myObj) {
    return this.http.delete(this.urlEquipes + '/' + myObj['_id'], myObj)
  }
  getEquipe(id) {
    return this.http.get(this.urlEquipes + '/' + id)
  }
}
