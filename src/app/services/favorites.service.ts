import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  misFavoritos: any[] =[];
  constructor() {
    this.getLocalFavorites;
   }

  get getLocalFavorites(){
   return this.misFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  }

  inFavorites(anime: any){
    return !!this.misFavoritos.find( a => a.mal_id === anime.mal_id);
  }

  addToFavorite(anime: any){
    const found = this.misFavoritos.find( a => a.mal_id === anime.mal_id);
    if(found){
      this.misFavoritos = this.misFavoritos.filter( a => a.mal_id !== found.mal_id);
      localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
    }else{
      this.misFavoritos.push(anime);
      localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
    }
  }

}
