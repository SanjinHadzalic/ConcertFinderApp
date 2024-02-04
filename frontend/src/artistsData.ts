import { Artist } from "./app/shared/models/Artist";
import { sample_albums } from "./albumsData";
import { Album } from "./app/shared/models/Album";

export const sample_artists: Artist[] = [
    {
        id: '1',
        name: 'U2',
        genre: 'rock',
        members: ['Bono', 'Adam Clayton', 'The Edge', 'Larry Mullen Jr.'],
        albums: [sample_albums[0], sample_albums[1], sample_albums[2]],
        country: 'Ireland',
        activeSince: new Date('1976-01-01'),
        imageURL: 'assets/artist_1.jpg'
    },
    {
        id: '2',
        name: 'Laibach',
        genre: 'industrial',
        members: ['Milan Fras', 'Ivan Novak', 'Marina Mårtensson', 'Vitja Balžalorsky', 'Bojan Krhlanko', 'Luka Jamnik', 'Rok Lopatič'],
        albums: [sample_albums[3], sample_albums[4], sample_albums[5]],
        country: 'Slovenia',
        activeSince: new Date('1980-01-01'),
        imageURL: 'assets/artist_2.jpg'
    },
    {
        id: '3',
        name: 'Rammstein',
        genre: 'Neue Deutsche Härte',
        members: ['Till Lindemann', 'Paul Landers', 'Christoph Schneider', 'Christian Lorenz', 'Richard Kruspe', 'Oliver Riedel'],
        albums: [sample_albums[6], sample_albums[7], sample_albums[8]],
        country: 'Germany',
        activeSince: new Date('1994-01-01'),
        imageURL: 'assets/artist_3.jpg'
    }
];