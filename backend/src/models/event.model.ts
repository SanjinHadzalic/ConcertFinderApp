import { Schema, model } from "mongoose";
import { Artist, ArtistSchema } from "./artist.model";

export interface Event{
    id: string;
    title: string;
    imageURL: string;
    artistId: Artist;
    venueId: string; 
    dateTime: Date; 
    capacity: number;
    price: number;
}

export const EventSchema = new Schema<Event>(
    {
        title: {type:String, required:true},
        imageURL: {type:String, required:true},
        artistId: {type:ArtistSchema, required: true},
        venueId: {type:String, required:true},
        dateTime: {type:Date, required:true},
        capacity: {type: Number, required:true},
        price: {type: Number, required:true},
    },
    {
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        }, timestamps:true
    }
)

export const EventModel = model<Event>('event', EventSchema);