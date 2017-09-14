import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IFilm } from "../../pages/film.details.page/films";
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }
  getFilms():Observable<IFilm[]> {
    return this.http.get('assets/filmdetails.json').map(res => res.json());
  }


  /*getFilm(id: number): Observable<IFilm> {
        return this.getFilms()
            .map((films: IFilm[]) => films.find(p => p.filmId === id));
    }
*/
}
