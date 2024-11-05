import { Component, inject } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { AnimecardComponent } from '../../components/animecard/animecard.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [AnimecardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favoritos: any[] = [];
  private _favoriteService = inject(FavoritesService);
  constructor(){
    this.getFavorites;
  }

  get getFavorites(){
    return this._favoriteService.getLocalFavorites;
  }


}
