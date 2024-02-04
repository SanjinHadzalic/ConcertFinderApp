import {Router} from 'express';
import { sample_events } from '../../../frontend/src/eventsData';
import asynceHandler from 'express-async-handler';
import { EventModel } from '../models/event.model';

const router = Router();

router.get("/seed", asynceHandler(
  async  (req, res) => {
        const eventsCount = await EventModel.countDocuments();
        if(eventsCount>0) {
            res.send('Seed is already done!');
            return;
        }
        await EventModel.create(sample_events);
        res.send("Seed is done!")
    }
))

router.get("", (req,res) => {
    res.send(sample_events);
})

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm.trim().toLocaleLowerCase();
    console.log('Search Term:', searchTerm);

    const events = sample_events.filter(event => event.title.trim().toLocaleLowerCase().includes(searchTerm));
    res.send(events);
});

export default router;
