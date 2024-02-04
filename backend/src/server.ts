import express from "express";
import cors from "cors";
import { sample_events } from "../../frontend/src/eventsData";
import { sample_albums } from "../../frontend/src/albumsData";
import { Album } from "../../frontend/src/app/shared/models/Album";
import { sample_users } from "./usersData";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}));

app.get("", (req,res) => {
    res.send(sample_events);
})

app.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;

    const events = sample_events
    .filter(event => event.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    res.send(events);
})

app.get('/api/album/:id', (req,res)=>{
    const id = req.params.id;

    const albums = sample_albums.find(album => album.id == id) ?? new Album();
    res.send(albums);
})

app.post("/login", (req,res)=>{
    const {email,password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user) {
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("User name or password is not valid!");
    }
});

const generateTokenResponse = (user:any)=> {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "randomText", {expiresIn:"30d"});

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log('website served on http://localhost:' + port);
})