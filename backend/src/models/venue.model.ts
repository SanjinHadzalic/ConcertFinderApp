import { Schema, model } from "mongoose";

export interface Venue{
    id: string;
    name: string;
    imageURL: string;
    address: string;
    description: string;
    latitude: Number;
    longitude: Number; 
}

export const VenueSchema = new Schema<Venue>({
    name: {type:String, required:true},
    imageURL: {type:String, required:true},
    address: {type:String, required:true},
    description: {type:String, required:true},
    latitude: {type:Number, required:true},
    longitude: {type:Number, required:true}
},
{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }, timestamps:true
})

export const VenueModel = model<Venue>('venue', VenueSchema);