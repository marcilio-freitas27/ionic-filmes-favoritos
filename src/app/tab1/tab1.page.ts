import { Component } from '@angular/core';
import { FilmeService } from '../service/filme.service';
import { IonInput } from '@ionic/angular';
import { Filme } from '../model/filme';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  filme: Filme[]
  constructor(private filmeService: FilmeService) {
    this.filme = []
  }

  obterFilmeGeral(text: IonInput){
    let texto = JSON.stringify(text.value);
    this.filmeService.obterFilmeGeral(texto).subscribe((res) =>{
      this.filme  = Object.values(res)[0]
      this.favoritarFilme(this.filme);
    })
  }

  favoritarFilme(filme: any){
    for (let index = 0; index < this.filme.length; index++) {
      filme[index].Favorito = false
    }
  }

  favoritar(filme: any){
    filme.Favorito = true;
    this.filmeService.setFavoritos(filme);
  }

}
