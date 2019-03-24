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
  // gravidade  = 1;
  // urgencia = 1;
  // tendencia = 1;
  // score = 1;
  // classificacao = 3;
  // classificacaoLabel : string;
  // gravidadeLabel : string;
  // urgenciaLabel : string;
  // tendenciaLabel : string;
  gravidadeLabel ='Sem gravidade';
  urgenciaLabel ='Pode esperar';
  tendenciaLabel ='Não irá mudar';
  classificacaoLabel = 'Quando possível';


  constructor(private route: ActivatedRoute,
    private router: Router,
    private atividadeService: AtividadeService) { }

    handleScore(){
      this.atividade.score = this.atividade.gravidade*this.atividade.urgencia*this.atividade.tendencia;

      if (this.atividade.score >= 48 && this.atividade.score <=128){
        this.atividade.classificacao = 1;
        this.classificacaoLabel = 'Precisa ser feito';
      }
      if (this.atividade.score >=27 && this.atividade.score<=47){
        this.atividade.classificacao = 2;
        this.classificacaoLabel = 'Planeje ou Delegue';
      }
      if(this.atividade.score < 27) {
        this.atividade.classificacao = 3;
        this.classificacaoLabel = 'Quando possível';
      }
    }

    handleGravidadeLabel (){
      if (this.atividade.gravidade==1){
        this.gravidadeLabel='Sem gravidade';
      }
      if (this.atividade.gravidade==2){
        this.gravidadeLabel='Pouco grave';
      }
      if (this.atividade.gravidade==3){
        this.gravidadeLabel='Grave';
      }
      if (this.atividade.gravidade==4){
        this.gravidadeLabel='Muito grave';
      }
      if (this.atividade.gravidade==5){
        this.gravidadeLabel='Extremamente grave';
      }
    }

    handleUrgenciaLabel (){
      if (this.atividade.urgencia==1){
        this.urgenciaLabel='Pode esperar';
      }
      if (this.atividade.urgencia==2){
        this.urgenciaLabel='Pouco urgente';
      }
      if (this.atividade.urgencia==3){
        this.urgenciaLabel='Urgente, merece atenção no curto prazo';
      }
      if (this.atividade.urgencia==4){
        this.urgenciaLabel='Muito urgente';
      }
      if (this.atividade.urgencia==5){
        this.urgenciaLabel='Necessidade de ação imediata';
      }
    }

    handleTendenciaLabel (){
      if (this.atividade.tendencia==1){
        this.tendenciaLabel='Não irá mudar';
      }
      if (this.atividade.tendencia==2){
        this.tendenciaLabel='Irá piorar a longo prazo';
      }
      if (this.atividade.tendencia==3){
        this.tendenciaLabel='Irá piorar a médio prazo';
      }
      if (this.atividade.tendencia==4){
        this.tendenciaLabel='Irá piorar a curto prazo';
      }
      if (this.atividade.tendencia==5){
        this.tendenciaLabel='Irá piorar rapidamente';
      }
    }
    ngOnInit() {
      this.selectAtividade();
      // console.log(this.atividade);
      // this.gravidade  = this.atividade.gravidade;
      // this.urgencia = this.atividade.urgencia;
      // this.tendencia = this.atividade.tendencia;
      // this.score = this.atividade.score;
      // this.classificacao = this.atividade.classificacao;
      //
      // this.handleGravidadeLabel();
      // this.handleUrgenciaLabel();
      // this.handleTendenciaLabel();
      // this.handleScore();

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
            console.log(atividade);

            this.handleGravidadeLabel();
            this.handleUrgenciaLabel();
            this.handleTendenciaLabel();
          });
        }
      });
    }

  }
