import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeService } from '../atividade/atividade.service';
import { Atividade } from '../atividade/atividade';
import { NgForm } from '@angular/forms';

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
  constructor(private route: ActivatedRoute,
              private router: Router,
              private atividadeService: AtividadeService) { }

  ngOnInit() {
    this.selectAtividade();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/list']);
  }

  save(form: any) {
    this.atividadeService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(id : number) {
    this.atividadeService.deleteAtividade(id).subscribe(result => {
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
