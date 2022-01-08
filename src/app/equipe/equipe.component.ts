import { Component, OnInit } from '@angular/core';
import { EquipeService } from "../services/equipe.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  mesEquipes: any;
  constructor(private service: EquipeService, private router : Router) { }  // injection de dépendences

  ngOnInit(): void {
    this.refreshListEquipes();
  }

  refreshListEquipes() {
    this.service.getEquipes().subscribe(
      response => {
        this.mesEquipes = response;
      }
    );
  }

  deleteEquipe(team) {
    this.service.deleteEquipe(team).subscribe(response => {
      console.log(response);
      this.refreshListEquipes();
      })

  }

  updateEquipe(team) {
    this.router.navigate(['updateEquipe' + '/' + team['_id']]);
    }
}
