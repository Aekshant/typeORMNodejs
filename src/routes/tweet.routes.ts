import * as express from "express";
import { authentification } from "../middleware/authentification";
import { TweetsController } from "../controllers/tweet.controller";
const Router = express.Router();

Router.post("/", authentification, TweetsController.createTweet);

export { Router as tweetRouter };
