import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Atividade } from './atividade';
import { AtividadeService } from './atividade.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ AtividadeService ]
})

export class AddComponent implements OnInit {
  theList: object[];
  atividade: Atividade;
  gravidade : number;
  urgencia : number;
  tendencia : number;
  score : number;

  showForm: boolean;

  handleScore(gravidade: number, urgencia:number, tendencia:number){
    this.gravidade = gravidade;
    this.urgencia = urgencia;
    this.tendencia = tendencia;
    this.score = this.gravidade*this.urgencia*this.tendencia;
  }
  add(formInfo: any): void {
      const newAtividade: Atividade = {
         titulo: formInfo.titulo,
         descricao: formInfo.descricao,
         gravidade: formInfo.gravidade,
         urgencia: formInfo.urgencia,
         tendencia: formInfo.tendencia,
         score: formInfo.score
       }
      this.atividadeService.addAtividade(newAtividade)
        .subscribe();
         alert("Atividade criada com sucesso!");
    }

   toggleAtvdDisplay() {
      this.showForm = !this.showForm;
    }

  constructor(private atividadeService: AtividadeService) {
      this.showForm = true;

 }

  ngOnInit() {
    // this.gravidade =1;
    // this.urgencia = 1;
    // this.tendencia = 1;
    // this.score=1;
  }


}
