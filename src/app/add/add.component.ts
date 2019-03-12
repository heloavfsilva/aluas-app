import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Atividade } from '../atividade/atividade';
import { AtividadeService } from '../atividade/atividade.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ AtividadeService ]
})

export class AddComponent implements OnInit {
  atividade: Atividade;
  gravidade : number;
  urgencia : number;
  tendencia : number;
  score : number;
  classificacao : number;


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
    if(this.score < 27) {
      this.classificacao = 3;
    }
  }
  add(formInfo: any): void {
    const newAtividade: Atividade = {
      id: '',
      titulo: formInfo.titulo,
      descricao: formInfo.descricao,
      gravidade: formInfo.gravidade,
      urgencia: formInfo.urgencia,
      tendencia: formInfo.tendencia,
      score: formInfo.score,
      classificacao: this.classificacao,
      usuario: localStorage.getItem('usuario')
    }
    this.atividadeService.save(newAtividade)
    .subscribe();
      alert("Atividade criada com sucesso!");
    }

    constructor(private atividadeService: AtividadeService) { }

    ngOnInit() {

    }


  }
