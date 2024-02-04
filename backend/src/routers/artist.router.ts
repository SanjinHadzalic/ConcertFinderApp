import {Router} from 'express';
import asynceHandler from 'express-async-handler';
import { EventModel } from '../models/event.model';
import { ArtistModel } from '../models/artist.model';
import { sample_artists } from '../../../frontend/src/artistsData';
import { Artist } from '../../../frontend/src/app/shared/models/Artist';

const router = Router();

router.get("/seed", asynceHandler(
    async  (req, res) => {
          const artistCount = await ArtistModel.countDocuments();
          if(artistCount>0) {
              res.send('Seed is already done!');
              return;
          }
          await ArtistModel.create(sample_artists);
          res.send("Seed is done!")
      }
  ))
  

router.get("/:id", (req, res) => {
    const id = req.params.id;

    const artists = sample_artists.find(artist => artist.id == id) ?? new Artist();
    res.send(artists);
});

export default router;