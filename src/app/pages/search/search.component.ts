import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimeService } from '../../services/anime.service';
import { AnimecardComponent } from '../../components/animecard/animecard.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ FormsModule, AnimecardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private _animeS = inject(AnimeService);
  animesSearch:any[] = []
  sinDatos =  true;
  busqueda: string = 'One Piece';

  constructor(){
    this.buscarAnime();
  }

  buscarAnime(){
    console.log('Buscando: ' , this.busqueda);
    this._animeS.searchAnime(this.busqueda).subscribe((result:any)=>{
      console.log(result);
      this.animesSearch = result.data;
      if(this.animesSearch.length < 1){
        this.sinDatos = false;
      }
    })
    this.busqueda = '';
  }

}
