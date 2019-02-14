import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Atividade } from '../atividade';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})

export class AddComponent implements OnInit {
  showForm: boolean;
  @Output() addEvt = new EventEmitter();

  atividade = new Atividade();


  toggleAptDisplay() {
    this.showForm = !this.showForm;
  };

  handleAdd(formInfo: any) {
     this.addEvt.emit(this.atividade);
    console.log('add');
    console.log(this.atividade.titulo);

  };

  constructor() {
    this.showForm = false;
  }

  ngOnInit() {}
}


