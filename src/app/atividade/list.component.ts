import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { Atividade } from './atividade';
import { AtividadeService } from './atividade.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [ AtividadeService ]
})

export class ListComponent implements OnInit {
   atividade: Atividade;
   atvdList: Atividade[];
   modifiedList: Atividade[];
   orderBy: string;
   orderType: string;
   lastIndex: number;


  handleDelete(formInfo: object) {
    // this.atividadeService.deleteAtividade()
    //   .subscribe();
    //    alert("Atividade deletada com sucesso!");
    //this.deleteEvt.emit(formInfo);
  }

  handleUpdate(atividade: Atividade) {
    // this.atividadeService.updateAtividade(atividade);
  }

 constructor(private http: HttpClient, private atividadeService: AtividadeService) {

 }
  getAtividade(): void {
    this.atividadeService.getAtividade().subscribe(
      data => {this.atvdList = data}
    );
  }

 ngOnInit(): void {
   this.getAtividade();
   alert("Alerta de list!");

 }
}
