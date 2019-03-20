import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeService } from '../atividade/atividade.service';
import { Atividade } from '../atividade/atividade';
import { NgForm } from '@angular/forms';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ AtividadeService ]

})
export class EditComponent implements OnInit {
  atividade: any = {};
  id: string;
  titulo: string;
  sub: Subscription;
  gravidade  = 1;
  urgencia = 1;
  tendencia = 1;
  score = 1;
  classificacao = 3;
  // classificacaoLabel : string;
  // gravidadeLabel : string;
  // urgenciaLabel : string;
  // tendenciaLabel : string;
  gravidadeLabel ='Sem gravidade';
  urgenciaLabel ='Pode esperar';
  tendenciaLabel ='Não irá mudar';
  classificacaoLabel = 'When possible';


  constructor(private route: ActivatedRoute,
    private router: Router,
    private atividadeService: AtividadeService) { }

    handleScore(){
      this.score = this.gravidade*this.urgencia*this.tendencia;

      if (this.score >= 48 && this.score <=128){
        this.classificacao = 1;
        this.classificacaoLabel = 'Get it done';
      }
      if (this.score >=27 && this.score<=47){
        this.classificacao = 2;
        this.classificacaoLabel = 'Plan or Delegate';
      }
      if(this.score < 27) {
        this.classificacao = 3;
        this.classificacaoLabel = 'When possible';
      }
    }

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
    ngOnInit() {
      this.selectAtividade();
      console.log(this.atividade);
      this.gravidade  = this.atividade.gravidade;
      this.urgencia = this.atividade.urgencia;
      this.tendencia = this.atividade.tendencia;
      this.score = this.atividade.score;
      this.classificacao = this.atividade.classificacao;

      this.handleGravidadeLabel();
      this.handleUrgenciaLabel();
      this.handleTendenciaLabel();
      this.handleScore();

    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    gotoList() {
      this.router.navigate(['/painel']);
    }

    save() {
      this.atividadeService.save(this.atividade).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }

    remove(id : number) {
      this.atividadeService.deleteAtividade(id).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }

    complete(id : number) {
      this.atividadeService.completeAtividade(id).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }

    selectAtividade(){
      console.log('Edit here!')
      this.sub = this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.atividadeService.getId(id).subscribe(atividade => {
            this.atividade = atividade;
          });
        }
      });
    }

  }
