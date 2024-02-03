import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../shared/models/Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  events: Event[] = [];

  constructor(private eventService: EventService, activatedRoute: ActivatedRoute) {
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

  ngOnInit(): void {
  }
}
