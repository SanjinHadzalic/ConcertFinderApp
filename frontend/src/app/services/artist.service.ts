import { Injectable } from '@angular/core';
import { Artist } from '../shared/models/Artist';
import { sample_artists } from '../../artistsData';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getAll(): Artist[] {
    return sample_artists;
  }

  getAllArtistsBySearchTerm(searchTerm:string) {
    return this.getAll().filter(artist => artist.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

  getArtistById(artistId:string):Artist{
    return this.getAll().find(artist => artist.id == artistId) ?? new Artist();
  }
}
