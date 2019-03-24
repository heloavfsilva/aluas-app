import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Atividade } from '../atividade/atividade';
import { AtividadeService } from '../atividade/atividade.service';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ AtividadeService ]
})

export class AddComponent{
  atividade: Atividade;
  gravidade  = 1;
  urgencia = 1;
  tendencia = 1;
  score = 1;
  classificacao = 3;
  gravidadeLabel ='Sem gravidade';
  urgenciaLabel ='Pode esperar';
  tendenciaLabel ='Não irá mudar';
  classificacaoLabel = 'Precisa ser feito';

  handleScore(){
    this.score = this.gravidade*this.urgencia*this.tendencia;

    if (this.score >= 48 && this.score <=128){
      this.classificacao = 1;
      this.classificacaoLabel = 'Precisa ser feito';
    }
    if (this.score >=27 && this.score<=47){
      this.classificacao = 2;
      this.classificacaoLabel = 'Planeje ou Delegue';
    }
    if(this.score < 27) {
      this.classificacao = 3;
      this.classificacaoLabel = 'Quando possível';
    }
  }
  add(formInfo: any): void {
    const newAtividade: Atividade = {
      id: '',
      titulo: formInfo.titulo,
      descricao: formInfo.descricao,
      gravidade: this.gravidade,
      urgencia: this.urgencia,
      tendencia: this.tendencia,
      score: this.score,
      classificacao: this.classificacao,
      usuario: localStorage.getItem('usuario'),
      status: 'New'
    }
    this.atividadeService.save(newAtividade)
    .subscribe();
    alert("Atividade criada com sucesso!");

  }

  constructor(private atividadeService: AtividadeService) { }

  handleGravidadeLabel (){
    if (this.gravidade==1){
      this.gravidadeLabel='Sem gravidade';
    }
    if (this.gravidade==2){
      this.gravidadeLabel='Pouco grave';
    }
    if (this.gravidade==3){
      this.gravidadeLabel='Grave';
    }
    if (this.gravidade==4){
      this.gravidadeLabel='Muito grave';
    }
    if (this.gravidade==5){
      this.gravidadeLabel='Extremamente grave';
    }
  }

  handleUrgenciaLabel (){
    if (this.urgencia==1){
      this.urgenciaLabel='Pode esperar';
    }
    if (this.urgencia==2){
      this.urgenciaLabel='Pouco urgente';
    }
    if (this.urgencia==3){
      this.urgenciaLabel='Urgente, merece atenção no curto prazo';
    }
    if (this.urgencia==4){
      this.urgenciaLabel='Muito urgente';
    }
    if (this.urgencia==5){
      this.urgenciaLabel='Necessidade de ação imediata';
    }
  }

  handleTendenciaLabel (){
    if (this.tendencia==1){
      this.tendenciaLabel='Não irá mudar';
    }
    if (this.tendencia==2){
      this.tendenciaLabel='Irá piorar a longo prazo';
    }
    if (this.tendencia==3){
      this.tendenciaLabel='Irá piorar a médio prazo';
    }
    if (this.tendencia==4){
      this.tendenciaLabel='Irá piorar a curto prazo';
    }
    if (this.tendencia==5){
      this.tendenciaLabel='Irá piorar rapidamente';
    }
  }


}
