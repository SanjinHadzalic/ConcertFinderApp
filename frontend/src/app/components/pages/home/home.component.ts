import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { VenueService } from '../../../services/venue.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../shared/models/Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: Event[] = [];

  constructor(
    private eventService: EventService,
    private venueService: VenueService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.eventService.getAllEventBySearchTerm(params.searchTerm)
          .subscribe((serverEvents) => {
            this.events = serverEvents;
          });
      } else {
        this.eventService.getAll()
          .subscribe((serverEvents) => {
            this.events = serverEvents;
          });
      }
    });
  }

  getVenueName(venueId: string): string {
    const venue = this.venueService.getVenueById(venueId);
    return venue ? venue.name : 'Unknown Venue';
  }
}
