import { Event } from "./app/shared/models/Event";
import { sample_artists } from "./artistsData";

export const sample_events: Event[] = [
    {
        id: '1',
        title: 'Koncert U2 u Areni Zagreb',
        imageURL: 'assets/artist_1.jpg', // TODO povuci sliku iz Venue klase
        artist: sample_artists[0],
        venueId: '2', 
        dateTime: new Date('2022-02-02T12:00:00'), // date and time
        capacity: 100,
        price: 70
    },
    {
        id: '2',
        title: 'Laibach u Zagrebu',
        imageURL: 'assets/artist_2.jpg',
        artist: sample_artists[1],
        venueId: '1', 
        dateTime: new Date('2022-02-02T12:00:00'), 
        capacity: 100,
        price: 30
    },
];