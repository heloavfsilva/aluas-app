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

  //@Output() addEvt = new EventEmitter();
  atividade: Atividade;
  theList: object[];

  add(formInfo: any): void {
      // The server will generate the id for this nesw hero
      const newAtividade: Atividade = {
         titulo: formInfo.titulo,
         descricao: formInfo.descricao
       };
      this.atividadeService.addAtividade(newAtividade)
        .subscribe(Atividade);
      console.log('Im add');
      //console.log(this.atividade.titulo);

    }

   toggleAptDisplay() {
      this.showForm = !this.showForm;
    };

  constructor(private atividadeService: AtividadeService) {
      this.showForm = false;
 }

  ngOnInit() {
  }
}
