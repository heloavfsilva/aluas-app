import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { Atividade } from './atividade';
import { ActivatedRoute, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'Basic my-auth-token'
  })
};

@Injectable()
export class AtividadeService {
  atividadeUrl = 'http://localhost:8080/rest';  // URL to web api
  atividade: any = {};
  id: string;
  titulo: string;
  sub: Subscription;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router){}


  getAtividade (usuario: string): Observable<any> {
    return this.http.get(this.atividadeUrl +'/'+ usuario, httpOptions);
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

  /** Save: save the atividade if receive id, update else save new */
  save(atividade: any): Observable<any> {
    let result: Observable<Object>;
      if (atividade.id) {
        result = this.http.put(this.atividadeUrl+'/add/'+ atividade.id, atividade, httpOptions);
        } else {
          console.log(atividade.id);
          result = this.http.post(this.atividadeUrl+'/add', atividade, httpOptions);
        }

    return result;
  }


  /** Delete: delete the atividade from the server*/
  deleteAtividade (id: number) {
    console.log('Im delete!', id);
    return this.http.delete(this.atividadeUrl + '/delete/' + id, httpOptions);
  }

  /** Complete: complete the atividade from the server*/
  completeAtividade (id: number) {
    console.log('Im complete!', id);
    return this.http.put(this.atividadeUrl + '/complete/' + id, httpOptions);
  }
}
