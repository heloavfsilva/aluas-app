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
  providers: [ AtividadeService ],
})

export class AddComponent implements OnInit {
  showForm: boolean;

  atividade: Atividade;
  theList: object[];

  add(formInfo: any): void {
      const newAtividade: Atividade = {
         titulo: formInfo.titulo,
         descricao: formInfo.descricao,
         gravidade: formInfo.gravidade,
         urgencia: formInfo.urgencia,
         tendencia: formInfo.tendencia
       };
      this.atividadeService.addAtividade(newAtividade)
        .subscribe(Atividade);
         alert("User created successfully.");

    }

   toggleAptDisplay() {
      this.showForm = !this.showForm;
    };

  constructor(private atividadeService: AtividadeService) {
      this.showForm = true;
 }

  ngOnInit() {
  }
}
