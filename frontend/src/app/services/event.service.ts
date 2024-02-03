import { Injectable } from '@angular/core';
import { Event } from '../shared/models/Event';
import { sample_events } from '../../eventsData';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return sample_events;
  }

  getAllEventBySearchTerm(searchTerm:string) {
    return this.getAll().filter(event => event.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

  getEventById(eventId:string):Event{
    return this.getAll().find(event => event.id == eventId) ?? new Event();
  }
}
