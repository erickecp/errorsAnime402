import { inject, Pipe, PipeTransform } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Pipe({
  name: 'iconHeart',
  standalone: true
})
export class IconHeartPipe implements PipeTransform {
  private _favoriteS = inject(FavoritesService);
  transform(value: any): string {
    if(this._favoriteS.inFavorites(value)){

      return 'fa fa-heart'
    } else{
      return 'fa fa-heart-o'
    }
  }

}
