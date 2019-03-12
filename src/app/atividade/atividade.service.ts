import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Atividade } from './atividade';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'Basic my-auth-token'
  })
};

@Injectable()
export class AtividadeService {
  atividadeUrl = 'http://localhost:8080/rest';  // URL to web api

  constructor(private http: HttpClient){}


  getAtividade (usuario: number): Observable<any> {
    return this.http.get(this.atividadeUrl+usuario, httpOptions);
  }

  /* GET atividade whose name contains search term */
  // searchAtividade(term: string): Observable<Atividade[]> {
  //   term = term.trim();
  //
  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options = term ?
  //    { params: new HttpParams().set('name', term) } : {};
  //
  //   return this.http.get<Atividade[]>(this.atividadeUrl, options)
  //
  // }


  getId(id: string) {
      return this.http.get(this.atividadeUrl + '/list/' + id);
    }

  save(atividade: any): Observable<any> {
    let result: Observable<Object>;
    if (atividade['id']) {
      result = this.http.put(this.atividadeUrl+'/add/'+ atividade.id, atividade, httpOptions);
    } else {
      result = this.http.post(this.atividadeUrl+'/add', atividade, httpOptions);
    }
    return result;
  }


  /** DELETE: delete the atividade from the server*/
  deleteAtividade (id: number) {
    console.log('Im delete!', id);
    return this.http.delete(this.atividadeUrl + '/edit/' + id, httpOptions);
  }


}
