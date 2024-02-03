import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../shared/models/Artist';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from '../../../services/artist.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.css'
})
export class ArtistPageComponent implements OnInit{
  artist!: Artist;
  constructor(activatedRoute: ActivatedRoute, artistService:ArtistService, private router: Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.artist = artistService.getArtistById(params.id);
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
      // Handle the case where artist data is not available
      console.error('Artist data is not available.');
    }  }
}
