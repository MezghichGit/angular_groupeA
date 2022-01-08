import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EquipeService } from "../services/equipe.service";
@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {

  public _id;
  public equipeToUpdate;
  public name;
  public country;

  constructor(private service: EquipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        this._id = params.get('id');
      }
    );

    this.equipeToUpdate = this.service.getEquipe(this._id).subscribe(
      response => {
        console.log(response);
        this.name = response["name"];
        this.country = response["country"];
      }
    );
  }



  updateEquipe() {

    this.equipeToUpdate = {
    'name': this.name,
    'country': this.country,
    '_id': this._id
    }
    this.service.updateEquipe(this.equipeToUpdate).subscribe(
    response => {
      console.log(response);
      this.router.navigate(['equipes']);
    }
    );
  }
}
