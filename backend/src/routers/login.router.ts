import {Router} from 'express';
import { sample_users } from '../usersData';
import jwt from "jsonwebtoken";
import asynceHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs';

const router = Router();

router.get("/users/seed", asynceHandler(
    async  (req, res) => {
          const usersCount = await UserModel.countDocuments();
          if(usersCount>0) {
              res.send('Seed is already done!');
              return;
          }
          await UserModel.create(sample_users);
          res.send("Seed is done!")
      }
  ))
  

  router.post("/login", asynceHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            res.send(generateTokenResponse(user));
        } else {
            res.status(HTTP_BAD_REQUEST).send("Username or password is not valid!");
        }
    } else {
        res.status(HTTP_BAD_REQUEST).send("Username or password is not valid!");
    }
}));

router.post('/register', asynceHandler(
    async (req, res) => {
        const {name, email, password, address} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            res.status(HTTP_BAD_REQUEST).send('user already exists, please login!');
            return;
        }

        const encrypted = await bcrypt.hash(password, 10);

        const newUser: User = {
            id:'',
            name,
            email: email.toLocaleLowerCase(),
            password: encrypted,
            address,
            isAdmin:false
        }

        const dbUser = await UserModel.create(newUser);

        res.send(generateTokenResponse(dbUser));
    }
));

const generateTokenResponse = (user:any)=> {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "randomText", {expiresIn:"30d"});

    user.token = token;
    return user;
}

export default router;