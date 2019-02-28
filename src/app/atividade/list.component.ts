import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Atividade } from './atividade';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() atvdList;
  // @Output() deleteEvt = new EventEmitter();
  // @Output() updateEvt = new EventEmitter();

  handleDelete(formInfo: object) {
    this.atividadeService.deleteAtividade(newAtividade)
      .subscribe();
       alert("Atividade criada com sucesso!");
    //this.deleteEvt.emit(formInfo);
  }

  handleUpdate(atividade: Atividade) {
    this.atividadeService.updateAtividade(atividade);
  }
}
