import { Schema, model } from "mongoose";

export interface Album{
    id: string;
    name: string;
    genre: string;
    songs: String[];
    duration: number; 
    authorId:  string;
    producer: string;
    imageURL: string;
}

export const AlbumSchema = new Schema<Album>(
    {
    id: {type:String, required:true},
    name: {type:String, required:true},
    genre: {type:String, required:true},
    songs: {type:[String], required:true},
    duration: {type:Number, required:true},
    authorId:  {type:String, required:true},
    producer: {type:String, required:true},
    imageURL: {type:String, required:true}
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

export const AlbumModel = model<Album>('album', AlbumSchema);