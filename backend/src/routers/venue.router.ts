import {Router} from 'express';
import asynceHandler from 'express-async-handler';
import { VenueModel } from '../models/venue.model';
import { sample_venues } from '../../../frontend/src/venueData';
import { Venue } from '../../../frontend/src/app/shared/models/Venue';

const router = Router();

router.get("/seed", asynceHandler(
    async  (req, res) => {
          const venueCount = await VenueModel.countDocuments();
          if(venueCount>0) {
              res.send('Seed is already done!');
              return;
          }
          await VenueModel.create(sample_venues);
          res.send("Seed is done!")
      }
  ))
  
router.get('/', asynceHandler(
    async (req, res) => {
        const venues = await VenueModel.find();
        res.send(venues);
    }
))

router.get("/:id", asynceHandler(
    async (req, res) => {
        const id = req.params.id;
        const venues = await VenueModel.find();
    
        const venuesNew =venues.find(venue => venue.id == id) ?? new Venue();
        res.send(venuesNew);
    })
)

export default router;