import { Component } from '@angular/core';
import { FilmeService } from '../service/filme.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  favoritos: any[]
  constructor(private filmeService: FilmeService) {
    this.favoritos = [];
    this.pegarFilmes()
  }

  pegarFilmes(){
    this.favoritos = this.filmeService.obterFavoritos();
  }
}
