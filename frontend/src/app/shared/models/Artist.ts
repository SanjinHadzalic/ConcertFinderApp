import { Album } from "./Album";;

export class Artist{
    id!: string;
    name!: string;
    genre!: string;
    members!: string[];
    albums!: Album[]; 
    country!: string;
    activeSince!: Date;
    imageURL!: string;
}