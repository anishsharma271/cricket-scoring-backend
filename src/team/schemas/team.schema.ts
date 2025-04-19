import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema({ timestamps: true, collection:"teams" })
export class Team {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Players' })
  captainId: Types.ObjectId;

}

export const TeamSchema = SchemaFactory.createForClass(Team);


