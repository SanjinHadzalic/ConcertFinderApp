import { Artist } from "./Artist";

export class Event{
    id!: string;
    title!: string;
    imageURL!: string;
    artist!: Artist;
    venueId!: string; 
    dateTime!: Date; 
    capacity!: number;
    price!: number;
}