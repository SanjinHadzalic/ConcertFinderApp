import { Artist } from "./Artist";

export class Event{
    id!: string;
    title!: string;
    imageURL!: string;
    artist!: Artist;
    venue!: string; //TODO napraviti klasu Venue.ts
    dateTime!: Date; // date and time
    capacity!: string;
}