import { Event } from "./app/shared/models/Event";
import { sample_artists } from "./artistsData";

export const sample_events: Event[] = [
    {
        id: '1',
        title: 'Koncert U2 u Areni Zagreb',
        imageURL: 'assets/arena.jpg', // TODO povuci sliku iz Venue klase
        artist: sample_artists[0],
        venue: 'Tvornica', //TODO napraviti klasu Venue.ts
        dateTime: new Date('2022-02-02T12:00:00'), // date and time
        capacity: '100'
    },
    {
        id: '2',
        title: 'Laibach u Zagrebu',
        imageURL: 'assets/tvornica.jpg',
        artist: sample_artists[1],
        venue: 'Tvornica', //TODO napraviti klasu Venue.ts
        dateTime: new Date('2022-02-02T12:00:00'), // date and time
        capacity: '100'
    },
];