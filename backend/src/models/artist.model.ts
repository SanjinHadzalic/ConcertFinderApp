import { Schema, model, SchemaTypes, ObjectId } from "mongoose";
import { AlbumSchema } from "./album.model";

export interface Artist {
    id: string;
    name: string;
    genre: string;
    members: string[];
    albums: string[];
    country: string;
    activeSince: Date;
    imageURL: string;
}

export const ArtistSchema = new Schema<Artist>(
    {
        name: { type: String, required: true },
        genre: { type: String, required: true },
        members: { type: [String], required: true },
        albums: [{ type: [String], required: true }],
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
