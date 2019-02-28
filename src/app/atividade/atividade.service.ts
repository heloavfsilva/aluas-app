import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Atividade } from './atividade';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
};

@Injectable()
export class AtividadeService {
  atividadeUrl = 'http://localhost:8080/rest';  // URL to web api

  //private handleError: HandleError;

  constructor(private http: HttpClient){}
    //httpErrorHandler: HttpErrorHandler) {
    //this.handleError = httpErrorHandler.createHandleError('AtividadeService');

  /** GET atividade from the server */
  getAtividade (): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.atividadeUrl)
      .pipe(
        //catchError(this.handleError('getAtividade', []))
      );
  }

  /* GET atividade whose name contains search term */
  searchAtividade(term: string): Observable<Atividade[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Atividade[]>(this.atividadeUrl, options)
      .pipe(
        //catchError(this.handleError<Atividade[]>('searchAtividade', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new atividade to the database */
  addAtividade (atividade: Atividade): Observable<Atividade> {
    return this.http.post<Atividade>(this.atividadeUrl+"/add", atividade, httpOptions)
      .pipe(
        //catchError(this.handleError('addAtividade', atividade))
      );
  }

  /** DELETE: delete the atividade from the server*/
  deleteAtividade (id: number): Observable<{}> {
    const url = `${this.atividadeUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        //catchError(this.handleError('deleteAtividade'))
      );
  }

  /** PUT: update the atividade on the server. Returns the updated atividade upon success.*/
  updateAtividade (atividade: Atividade): Observable<Atividade> {
    // httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Atividade>(this.atividadeUrl, atividade, httpOptions)
      .pipe(
        //catchError(this.handleError('updateAtividade', hero))
      );
  }
}
