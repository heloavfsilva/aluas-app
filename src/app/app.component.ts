import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { without, findIndex } from 'lodash';
library.add(faTimes, faPlus);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theList: object[];
  modifiedList: object[];
  orderBy: string;
  orderType: string;
  lastIndex: number;

  addAtividade(Atividade: any) {
     this.http.post('http://localhost:8080/rest/add', Atividade);
     console.log(Atividade);
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.lastIndex = 0;
    this.http.get<Object[]>('http://localhost:8080/rest').subscribe(data => {
      this.theList = data.map((item: any) => {
        return item;
      });

    });
  }
}
