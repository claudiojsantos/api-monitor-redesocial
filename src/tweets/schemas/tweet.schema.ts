import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

export type TweetDocument = Tweet & Document;

@Schema()
export class TweetUser {
  @Prop({ type: MongooseSchema.Types.ObjectId })
  Id: string;
  @Prop()
  Name: string;
  @Prop()
  ScreenName: string;
  @Prop({ type: MongooseSchema.Types.Mixed })
  Location: any;
  @Prop()
  Description: string;
  @Prop({ type: Boolean })
  ContibutorsEnable: boolean;
  @Prop()
  ProfileImageURL: string;
  @Prop()
  BiggerProfileImageURL: string;
  @Prop()
  MiniProfileImageURL: string;
  @Prop()
  OriginalProfileImageURL: string;
}

@Schema()
export class Tweet {
  @Prop()
  Text: string;

  @Prop()
  Source: string;

  @Prop({ type: Boolean })
  Truncated: boolean;

  @Prop({ type: MongooseSchema.Types.Number })
  InReplyToStatusId: number;

  @Prop()
  User: TweetUser;

  @Prop()
  CreatedAt: number;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
