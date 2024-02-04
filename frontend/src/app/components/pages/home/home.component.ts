import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { VenueService } from '../../../services/venue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../../shared/models/Event';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  event!:Event;
  events: Event[] = [];

  constructor(
    private eventService: EventService,
    private venueService: VenueService, 
    private cartService:CartService,
    activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.events = this.eventService.getAllEventBySearchTerm(params.searchTerm);

        if (this.events.length === 0) {
          this.events = this.eventService.getAll();
        }
      } else {
        this.events = this.eventService.getAll();
      }
    });
  }

  getVenueName(venueId: string): string {
    const venue = this.venueService.getVenueById(venueId);
    return venue ? venue.name : 'Unknown Venue';
  }

}
