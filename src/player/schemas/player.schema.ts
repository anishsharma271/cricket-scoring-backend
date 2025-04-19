import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PlayerDocument = Player & Document;

@Schema({ timestamps: true, collection: 'players' })
export class Player {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: ['batsman', 'bowler', 'allrounder', 'wicketkeeper'] })
  role: string;

  @Prop({ type: Types.ObjectId, ref: 'teams' })
  teamId: Types.ObjectId;

  @Prop()
  battingStyle: string;

  @Prop()
  bowlingStyle: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
