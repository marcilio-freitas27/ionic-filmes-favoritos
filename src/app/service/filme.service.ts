import { Injectable } from '@angular/core';
import { Filme } from '../model/filme';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  url: string;
  apikey: string;
  favoritos: any[]
  constructor(private http: HttpClient) {
    this.apikey = "1c5281b2"
    this.url = "https://www.omdbapi.com/?";
    this.favoritos = []
  }

  obterFilmeExato(text: string): Observable<Filme>{
    return this.http.get<Filme>(`${this.url}apikey=${this.apikey}&t=${text}`);
   }

  obterFilmeGeral(text: string): Observable<Filme>{
    return this.http.get<Filme>(`${this.url}apikey=${this.apikey}&s=${text}`);
   }

  obterFavoritos(){
    return this.favoritos
  }

  verificarDuplicidade(filme: Filme): boolean{
    if (this.favoritos.find((element) => element === filme)) {
      return true;
    }
    return false;
   }

  setFavoritos(filme: any){
    !this.verificarDuplicidade(filme) ? this.favoritos.push(filme) : null;
  }
}
