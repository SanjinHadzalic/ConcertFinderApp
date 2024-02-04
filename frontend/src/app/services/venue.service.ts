import { Injectable } from '@angular/core';
import { Venue } from '../shared/models/Venue';
import { sample_venues } from '../../venueData';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  getAll(): Venue[] {
    return sample_venues;
  }

  getVenueById(id: string): Venue | undefined {
    return this.getAll().find(venue => venue.id === id);
  }
}
