import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Atividade } from './atividade';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
};

@Injectable()
export class AtividadeService {
  atividadeUrl = 'http://localhost:8080/rest';  // URL to web api

  constructor(private http: HttpClient){}

  getAtividade (): Observable<any> {
    return this.http.get(this.atividadeUrl);
  }

  /* GET atividade whose name contains search term */
  searchAtividade(term: string): Observable<Atividade[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Atividade[]>(this.atividadeUrl, options)

  }


  getId(id: string) {
      return this.http.get(this.atividadeUrl + '/' + id);
    }
  //////// Save methods //////////

  /** POST: add a new atividade to the database */
  addAtividade (atividade: Atividade): Observable<Atividade> {
    let result: Observable<Object>;
    if (atividade['href']) {
      result = this.http.put(atividade.href, atividade);
    } else {
      result = this.http.post(this.atividade+"/add", atividade, httpOptions);
    }
    return result;
    //return this.http.post<Atividade>(this.atividadeUrl+"/add", atividade, httpOptions)

  }

  /** DELETE: delete the atividade from the server*/
  deleteAtividade (href: string): Observable<{}> {
    return this.http.delete(href);
  }


}
