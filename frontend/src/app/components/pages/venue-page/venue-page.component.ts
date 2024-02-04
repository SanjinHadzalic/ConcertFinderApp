import { Component } from '@angular/core';
import { Venue } from '../../../shared/models/Venue';
import { VenueService } from '../../../services/venue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrl: './venue-page.component.css'
})
export class VenuePageComponent {
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
}
