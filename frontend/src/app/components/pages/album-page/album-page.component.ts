import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../../services/album.service';
import { ArtistService } from '../../../services/artist.service';
import { Album } from '../../../shared/models/Album';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const albumId = params['id'];
      this.album = this.albumService.getAlbumById(albumId)!;
    });
  }

  getArtistName(): string {
    const artist = this.artistService.getArtistById(this.album.authorId);
    return artist ? artist.name : 'Unknown Artist';
  }
}
