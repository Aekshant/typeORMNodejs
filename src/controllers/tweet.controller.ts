import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Tweets } from "../entity/Tweets.entity";
import { User } from "../entity/User.entity";
import { encrypt } from "../helpers/encrypt";

export class TweetsController {
    // static async createTweet ( req: Request, res: Response ){
    //     if (!req[" currentUser"]) return res.status(401).json({ message: "Unauthorized" });
    //     const { tweet } = req.body;
    //     const userId = req[" currentUser"].id
    //     const tweetData = new Tweets();
    //     tweetData.tweet = tweet
    //     tweetData.userId = userId
    //     const tweetRepository = AppDataSource.getRepository(Tweets);
    //     await tweetRepository.save(tweetData);
    //     return res.status(200).json({ message: "Tweet created successfully", success : true });
    // }

    static async createTweet(req: Request, res: Response) {
        if (!req[" currentUser"]) return res.status(401).json({ message: "Unauthorized" });
    
        const { tweet } = req.body;
        const userId = req[" currentUser"].id
    
        // // Fetch the user entity based on the userId
        // const userRepository = AppDataSource.getRepository(User);
        // const user = await userRepository.findOne({ where: { id: userId } });
        // if (!user) return res.status(404).json({ message: "User not found" });
    
        // Create a new tweet entity and assign the user
        const tweetData = new Tweets();
        tweetData.tweet = tweet;
        tweetData.user = userId; // Set the user property
    
        const tweetRepository = AppDataSource.getRepository(Tweets);
        await tweetRepository.save(tweetData);
    
        return res.status(200).json({ message: "Tweet created successfully", success: true });
    }
}