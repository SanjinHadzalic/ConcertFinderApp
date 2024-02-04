import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../shared/models/Artist';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../shared/models/Album';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.css'
})
export class ArtistPageComponent implements OnInit{
  artist!: Artist;
  artistAlbums: Album[] = [];

  constructor(activatedRoute: ActivatedRoute, artistService:ArtistService, private router: Router, albumService:AlbumService) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.artist = artistService.getArtistById(params.id);
      this.artistAlbums = albumService.getAlbumsByArtistId(params.id);
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  searchArtistEvents(term: string): void {
    if (this.artist) {
      console.log(term);

      const searchUrl = `/search/${this.artist.name.toLowerCase()}`;
      this.router.navigate([searchUrl]);
    } else {
      console.error('Artist data is not available.');
    }  }
}
