import { Component, OnInit } from '@angular/core';
import {EquipeService} from "../services/equipe.service";
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  mesEquipes:string[]=[];
  constructor(private service : EquipeService) { }  // injection de dépendences

  ngOnInit(): void {
    this.mesEquipes = this.service.getEquipes();
  }

}
