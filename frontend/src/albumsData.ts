import { Album } from "./app/shared/models/Album";
import { sample_artists } from "./artistsData"; 

export const sample_albums: Album[] = [
    {
        id: '1',
        name: 'Boy',
        genre: 'post-punk',
        songs: ['I Will Follow', "11 O'Clock Tick Tock", 'Touch', 'Speed Of Life', 'Saturday Night',
        'Things to Make and Do', 'Out of Control', 'Boy-Girl', 'Stories for Boys', 'Another Day', 'Twilight'],
        duration: 52.26,
        authorId: '1',
        producer: 'Steve Lilywhite',
        imageURL: 'assets/albumCovers/boy.png'
    },
    {
        id: '2',
        name: 'October',
        genre: 'post-punk',
        songs: ['Gloria', 'I Fall Down', 'I Threw a Brick Through a Window', 'Fire', 'October', 'With a Shout', 'Scarlet', 'A Celebration',
        'J. Swallo', 'Trash, Trampoline and the Party Girl', 'I Will Follow', 'The Ocean'],
        duration: 59.55,
        authorId: '1',
        producer: 'Steve Lilywhite',
        imageURL: 'assets/albumCovers/october.jpg'
    },
    {
        id: '3',
        name: 'War',
        genre: 'post-punk',
        songs: ["Sunday Bloody Sunday", "Seconds", "New Year's Day", "Like a Song...", "Drowning Man", 	"The Refugee", 	"Two Hearts Beat as One", "Red Light",
        'Surrender', '40'],
        duration: 42.03,
        authorId: '1',
        producer: 'Steve Lilywhite',
        imageURL: 'assets/albumCovers/october.jpg'
    },
    {
        id: '4',
        name: 'Laibach',
        genre: 'industrial',
        songs: ["Cari Amici Soldati (Dear Soldier Friends)", "Sila (Force)", "Sredi Bojev (In the Midst of Struggles)", "Država (State)", 	"Dekret (Decree)", 	"Mi kujemo bodočnost! (We Are Forging the Future!)", "Brat moj (My Brother)", "Panorama"],
        duration: 40.59,
        authorId: '2',
        producer: 'n/a',
        imageURL: 'assets/albumCovers/laibach.jpg'
    },
    {
        id: '5',
        name: 'Nova Akropola',
        genre: 'industrial',
        songs: ["Cari Amici Soldati (Dear Soldier Friends)", "Sila (Force)", "Sredi Bojev (In the Midst of Struggles)", "Država (State)", 	"Dekret (Decree)", 	"Mi kujemo bodočnost! (We Are Forging the Future!)", "Brat moj (My Brother)", "Panorama"],
        duration: 40.59,
        authorId: '2',
        producer: 'Ken Thomas',
        imageURL: 'assets/albumCovers/novaakropola.jpg'
    },
    {
        id: '6',
        name: 'Opus Dei',
        genre: 'industrial',
        songs: ["Cari Amici Soldati (Dear Soldier Friends)", "Sila (Force)", "Sredi Bojev (In the Midst of Struggles)", "Država (State)", 	"Dekret (Decree)", 	"Mi kujemo bodočnost! (We Are Forging the Future!)", "Brat moj (My Brother)", "Panorama"],
        duration: 40.59,
        authorId: '2',
        producer: 'Ken Thomas',
        imageURL: 'assets/albumCovers/opusdei.jpg'
    },
    {
        id: '7',
        name: 'Herzeleid',
        genre: 'Neue Deutsche Härte',
        songs: ["Cari Amici Soldati (Dear Soldier Friends)", "Sila (Force)", "Sredi Bojev (In the Midst of Struggles)", "Država (State)", 	"Dekret (Decree)", 	"Mi kujemo bodočnost! (We Are Forging the Future!)", "Brat moj (My Brother)", "Panorama"],
        duration: 40.59,
        authorId: '3',
        producer: 'Ken Thomas',
        imageURL: 'assets/albumCovers/herzeleid.jpg'
    },
    {
        id: '8',
        name: 'Sehnsucht ',
        genre: 'Neue Deutsche Härte',
        songs: ["Cari Amici Soldati (Dear Soldier Friends)", "Sila (Force)", "Sredi Bojev (In the Midst of Struggles)", "Država (State)", 	"Dekret (Decree)", 	"Mi kujemo bodočnost! (We Are Forging the Future!)", "Brat moj (My Brother)", "Panorama"],
        duration: 40.59,
        authorId: '3',
        producer: 'Ken Thomas',
        imageURL: 'assets/albumCovers/sehnsucht.jpg'
    },
    {
        id: '9',
        name: 'Mutter',
        genre: 'Neue Deutsche Härte',
        songs: ["Cari Amici Soldati (Dear Soldier Friends)", "Sila (Force)", "Sredi Bojev (In the Midst of Struggles)", "Država (State)", 	"Dekret (Decree)", 	"Mi kujemo bodočnost! (We Are Forging the Future!)", "Brat moj (My Brother)", "Panorama"],
        duration: 40.59,
        authorId: '3',
        producer: 'Ken Thomas',
        imageURL: 'assets/albumCovers/Mutter.jpg'
    }
];