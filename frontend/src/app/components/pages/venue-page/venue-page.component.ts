import { AfterViewInit, Component } from '@angular/core';
import { Venue } from '../../../shared/models/Venue';
import { VenueService } from '../../../services/venue.service';
import { ActivatedRoute } from '@angular/router';
import L, { LatLngExpression } from 'leaflet';

@Component({
  selector: 'app-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrl: './venue-page.component.css'
})
export class VenuePageComponent implements AfterViewInit{
  venue!: Venue;

  constructor(private venueService: VenueService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const venueId = params['id'];

      this.venue = this.venueService.getVenueById(venueId)!;

      if (!this.venue) {
        // Handle not found scenario, e.g., redirect to an error page
      }
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const venueLocation: LatLngExpression = [this.venue.latitude, this.venue.longitude]; 
    //LAT 45.8085762,LON  15.9893966
    const map = L.map('map').setView(venueLocation, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker(venueLocation).addTo(map)
      .bindPopup(this.venue.name) 
      .openPopup();
  }
}
