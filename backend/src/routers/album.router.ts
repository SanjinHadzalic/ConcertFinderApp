import {Router} from 'express';
import asynceHandler from 'express-async-handler';
import { EventModel } from '../models/event.model';
import { sample_albums } from '../../../frontend/src/albumsData';
import { Album } from '../../../frontend/src/app/shared/models/Album';
import { AlbumModel } from '../models/album.model';

const router = Router();

router.get("/seed", asynceHandler(
    async  (req, res) => {
          const albumsCount = await AlbumModel.countDocuments();
          if(albumsCount>0) {
              res.send('Seed is already done!');
              return;
          }
          await AlbumModel.create(sample_albums);
          res.send("Seed is done!")
      }
  ))
  

router.get("/:id", (req, res) => {
    const id = req.params.id;

    const albums = sample_albums.find(album => album.id == id) ?? new Album();
    res.send(albums);
});

export default router;