import { Schema, model, SchemaTypes } from "mongoose";
import { AlbumSchema } from "./album.model";

export interface Artist {
    id: string;
    name: string;
    genre: string;
    members: string[];
    albums: string[]; // Change type to string array (ObjectId references)
    country: string;
    activeSince: Date;
    imageURL: string;
}

export const ArtistSchema = new Schema<Artist>(
    {
        name: { type: String, required: true },
        genre: { type: String, required: true },
        members: { type: [String], required: true },
        albums: [{ type: SchemaTypes.ObjectId, ref: 'Album', required: true }], // Reference to Album model
        country: { type: String, required: true },
        activeSince: { type: Date, required: true },
        imageURL: { type: String, required: true }
    },
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);

export const ArtistModel = model<Artist>('Artist', ArtistSchema);
