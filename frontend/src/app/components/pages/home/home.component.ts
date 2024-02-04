import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { VenueService } from '../../../services/venue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../../shared/models/Event';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  event!: Event;
  events: Event[] = [];

  constructor(
    private eventService: EventService,
    private venueService: VenueService, 
    private cartService:CartService,
    activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    let eventsObservbable: Observable<Event[]>
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        eventsObservbable = this.eventService.getAllEventBySearchTerm(params.searchTerm);

        if (this.events.length === 0) {
          eventsObservbable = this.eventService.getAll();
        }
      } else {
        eventsObservbable = this.eventService.getAll();

        eventsObservbable.subscribe((serverEvents)=>{
          this.events = serverEvents;
        })
      }
    });
  }

  getVenueName(venueId: string): string {
    const venue = this.venueService.getVenueById(venueId);
    return venue ? venue.name : 'Unknown Venue';
  }

}
