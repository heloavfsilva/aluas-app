import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeService } from './atividade.service';
import { Atividade } from './atividade';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
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

  remove(id) {
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
          //if (atividade) {
            this.atividade = atividade[0];
            console.log('achei o id ', this.atividade);
            //this.car.href = car._links.self.href;
            //this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
          //} else {
            //console.log('Atividade with id ',id,' not found, returning to list');
            //this.gotoList();
          //}
        });
      }
    });

  }

}
