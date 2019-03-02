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
  providers: [ AtividadeService ]
})

export class ListComponent implements OnInit {
   atividade: Atividade;
   atividades: Atividade[];

  constructor(private http: HttpClient, private atividadeService: AtividadeService) {}
  getAtividade(): void {
    this.atividadeService.getAtividade().subscribe(
      data => {this.atividades = data}
    );
  }

 ngOnInit(): void {
   this.getAtividade();
   alert("Alerta de list!");
 }
}
