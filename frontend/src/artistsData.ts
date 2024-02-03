import { Artist } from "./app/shared/models/Artist";

export const sample_artists: Artist[] = [
    {
        id: '1',
        name: 'U2',
        genre: 'rock',
        members: ['Bono', 'Adam Clayton', 'The Edge', 'Larry Mullen Jr.'],
        albums: ['Boy', 'October', 'War'],
        country: 'Ireland',
        activeSince: new Date('1976-01-01'),
        imageURL: 'assets/artist_1.jpg'
    },
    {
        id: '2',
        name: 'Laibach',
        genre: 'industrial',
        members: ['Milan Fras', 'Ivan Novak', 'Marina Mårtensson', 'Vitja Balžalorsky', 'Bojan Krhlanko', 'Luka Jamnik', 'Rok Lopatič'],
        albums: ['Laibach', 'Nova Akropola', 'Opus Dei', 'Let It Be', 'Sympathy for the Devil', 'Kapital'],
        country: 'Slovenia',
        activeSince: new Date('1980-01-01'),
        imageURL: 'assets/artist_2.jpg'
    },
    {
        id: '3',
        name: 'Rammstein',
        genre: 'Neue Deutsche Härte',
        members: ['Till Lindemann', 'Paul Landers', 'Christoph Schneider', 'Christian Lorenz', 'Richard Kruspe', 'Oliver Riedel'],
        albums: ['Herzeleid', 'Sehnsucht', 'Mutter', 'Reise, Reise', 'Rosenrot'],
        country: 'Germany',
        activeSince: new Date('1994-01-01'),
        imageURL: 'assets/artist_3.jpg'
    },



];