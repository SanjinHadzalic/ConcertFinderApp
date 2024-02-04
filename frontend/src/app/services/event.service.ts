import { Injectable } from '@angular/core';
import { Event } from '../shared/models/Event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EVENTS_SEARCHTERM_URL, EVENTS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(EVENTS_URL);
  }

  getAllEventBySearchTerm(searchTerm: string): Observable<Event[]> {
    return this.http.get<Event[]>(EVENTS_SEARCHTERM_URL + searchTerm);
    console.log('qwe',EVENTS_SEARCHTERM_URL+searchTerm);
  }

  getEventById(eventId: string): Observable<Event> {
    return this.http.get<Event>(`${EVENTS_URL}/${eventId}`);
  }
}
