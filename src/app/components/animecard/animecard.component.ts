import { Component, inject, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import Swal from 'sweetalert2';
import { IconHeartPipe } from '../../pipes/icon-heart.pipe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-animecard',
  standalone: true,
  imports: [IconHeartPipe],
  templateUrl: './animecard.component.html',
  styleUrl: './animecard.component.css'
})
export class AnimecardComponent {
  private _router = inject(Router);
  private _favoritesService = inject(FavoritesService)
  @Input() animeInfo: any = {};

  addToFavorite(anime: any){
    this._favoritesService.addToFavorite(anime);
    const resp = this._favoritesService.inFavorites(anime);
    const msn  = resp ? ' agregado a favoritos!' : ' eliminado de favoritos!'
    Swal.fire({
      title:  anime.title + msn,
      icon:'success',
      timer: 2000,
      toast: true,
      showConfirmButton: false,
      position: 'top-end',
    })
  }

  goToDetail(id: number){
    this._router.navigateByUrl('/anime/'+ id)
  }

  inFavorites(anime: any){
    const resp = this._favoritesService.inFavorites(anime);
   if(resp === true){
    return 'fa fa-heart'
  }else{
    return 'fa fa-heart-o'
   }
  }
}
