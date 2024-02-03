export class Artist{
    id!: string;
    name!: string;
    genre!: string;
    members!: string[];
    albums!: string[]; // TODO napraviti model Album.ts
    country!: string;
    activeSince!: Date;
    imageURL!: string;
}