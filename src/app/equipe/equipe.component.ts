import { Component, OnInit } from '@angular/core';
import {EquipeService} from "../services/equipe.service";
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  mesEquipes:any;
  constructor(private service : EquipeService) { }  // injection de dépendences

  ngOnInit(): void {
    this.service.getEquipes().subscribe(

      data =>{
        this.mesEquipes = data;
        console.log(data);
    });
  }

}
