import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { Atividade } from './atividade';
import { AtividadeService } from './atividade.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ AtividadeService ]
})

export class ListComponent implements OnInit {
  atividade: Atividade;
  atividades: Atividade[];
  class1: Atividade[];
  class2: Atividade[];
  class3: Atividade[];

  constructor(private http: HttpClient, private atividadeService: AtividadeService) {}


  getAtividade(): void {
    // this.atividadeService.getAtividade().subscribe(
    //  data => {this.atividades = data});
    this.atividadeService.getAtividade().subscribe(
      (atividades: Atividade[]) => {
        this.atividades = atividades;
        var class1 =  atividades.filter(function(atividade) {
          return atividade.classificacao == 1;
        });
        this.class1 = class1;
        var class2 =  atividades.filter(function(atividade) {
          return atividade.classificacao == 2;
        });
        this.class2 = class2;
        var class3 =  atividades.filter(function(atividade) {
          return atividade.classificacao == 3;
        });
        this.class3 = class3;
      });
    }


    ngOnInit(): void {
      this.getAtividade();
    }
  }
