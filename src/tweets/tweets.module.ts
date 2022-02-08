import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { Tweet, TweetSchema } from './schemas/tweet.schema';
import { CheckNewTweetsTask } from './check-new-tweets/check-new-tweets.task';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }]),
  ],
  controllers: [TweetsController],
  providers: [TweetsService, CheckNewTweetsTask],
})
export class TweetsModule {}
