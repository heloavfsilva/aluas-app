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
  atividade: Atividade;
  gravidade : number;
  urgencia : number;
  tendencia : number;
  score : number;
  classificacao : number;

  showForm: boolean;

  handleScore(gravidade: number, urgencia:number, tendencia:number){
    this.gravidade = gravidade;
    this.urgencia = urgencia;
    this.tendencia = tendencia;
    this.score = this.gravidade*this.urgencia*this.tendencia;
    if (this.score >= 48 && this.score <=128){
      this.classificacao = 1;
    }
    if (this.score >=27 && this.score<=47){
      this.classificacao = 2;
    }
    else {
      this.classificacao = 3;
    }
  }
  add(formInfo: any): void {
      const newAtividade: Atividade = {
         titulo: formInfo.titulo,
         descricao: formInfo.descricao,
         gravidade: formInfo.gravidade,
         urgencia: formInfo.urgencia,
         tendencia: formInfo.tendencia,
         score: formInfo.score,
         classificacao: this.classificacao
       }
      this.atividadeService.addAtividade(newAtividade)
        .subscribe();
         alert("Atividade criada com sucesso!");
    }

   toggleAtvdDisplay() {
      this.showForm = false;
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
