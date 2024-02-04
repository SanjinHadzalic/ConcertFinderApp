import { Schema, model } from "mongoose";

export interface Venue{
    id: string;
    name: string;
    imageURL: string;
    address: string;
    description: string; 
}

export const VenueSchema = new Schema<Venue>({
    name: {type:String, required:true},
    imageURL: {type:String, required:true},
    address: {type:String, required:true},
    description: {type:String, required:true}
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