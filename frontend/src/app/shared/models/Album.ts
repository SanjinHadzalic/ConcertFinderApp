import { Artist } from "./Artist"; 

export class Album {
    id!: string;
    name!: string;
    genre!: string;
    songs!: string[];
    duration!: number; 
    authorId!:  string;
    producer!: string;
    imageURL!: string;
}