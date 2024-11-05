import { Component, inject } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  standalone: true,
  imports: [ ],
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.css'
})
export class AnimeDetailComponent {
  anime: any = {};
  private _animeS =  inject(AnimeService);
  private _activeR = inject(ActivatedRoute);

  constructor(){
    this._activeR.params.subscribe((params: any)=>{
      console.log(params.id);
      this.getAnime(params.id);
    })
  }
  getAnime(id: string){
    this._animeS.getAnimeById(id).subscribe((anime:any)=>{
      console.log(anime);
      this.anime = anime.data
    });
  }


}
