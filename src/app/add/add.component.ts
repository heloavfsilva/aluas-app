import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  showForm: boolean;

  @Output() addEvt = new EventEmitter();

  toggleAptDisplay() {
    this.showForm = !this.showForm;
  }

  handleAdd(formInfo: any) {
    const tempItem: object = {
      tvddtitulo: formInfo.tvddtitulo,
      tvdddescricao: formInfo.tvdddescricao,
      gvddqtdinput: formInfo.gvddqtdinput,
      rgncqtdinput: formInfo.rgncqtdinput,
      tdncqtdinput: formInfo.tdncqtdinput
    };
    this.addEvt.emit(tempItem);
    this.showForm = !this.showForm;
  }

  constructor() {
    this.showForm = false;
  }

  ngOnInit() {}
}
