import { IonInput } from '@ionic/angular';
import { Component } from '@angular/core';
import { FilmeService } from '../service/filme.service';
import { Filme } from '../model/filme';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  filme: Filme
  constructor(private filmeService: FilmeService) {
    this.filme = new Filme()
    this.filme.Favorito = false;
  }

  obterFilmeExato(text: IonInput){
    let texto = JSON.stringify(text.value);
    this.filmeService.obterFilmeExato(texto).subscribe((res) =>{
      texto === "" ? null : this.filme = res
    });
  }

  favoritar(filme: any){
    filme.Favorito = true;
    this.filmeService.setFavoritos(filme);
  }

}
