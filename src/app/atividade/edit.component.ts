import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeService } from './atividade.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  atividade: any ={};
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private atividadeService: AtividadeService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.atividadeService.get(id).subscribe((atividade: any) => {
          if (atividade) {
            this.atividade = atividade;
            this.atividade.href = atividade._links.self.href;
          } else {
            //console.log('Atividade with id '${id}' not found, returning to list');
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/list']);
  }

  save(form: NgForm) {
    this.addAtividade.addAtividade(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.atividadeService.deleteAtividade(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }



