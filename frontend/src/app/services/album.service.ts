import { Injectable } from '@angular/core';
import { Album } from '../shared/models/Album';
import { sample_albums } from '../../albumsData';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAll(): Album[] {
    return sample_albums;
  }
  getAlbumById(id: string): Album | undefined {
    return this.getAll().find(album => album.id == id) ?? new Album();
  }
  getAlbumsByArtistId(artistId: string): Album[] {
    return sample_albums.filter((album) => album.authorId === artistId);
  }
}
