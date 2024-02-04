import express from "express";
import cors from "cors";
import { sample_albums } from "../../frontend/src/albumsData";
import { Album } from "../../frontend/src/app/shared/models/Album";

import eventRouter from './routers/event.router';
import loginRouter from './routers/login.router'
import dotenv from 'dotenv';
import { dbConnect } from "./configs/database.config";
import albumRouter from "./routers/album.router";
import artistRouter from "./routers/artist.router";
import venueRouter from './routers/venue.router';

dotenv.config();
process.env.MONGO_URL;
dbConnect();


const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}));

app.use('/', eventRouter);
app.use('/', loginRouter);
app.use('/album', albumRouter);
app.use('/artist', artistRouter);
app.use('/venue', venueRouter);

const port = 5000;
app.listen(port, () => {
    console.log('website served on http://localhost:' + port);
})