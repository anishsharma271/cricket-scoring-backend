import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PlayerStatsDocument = PlayerStats & Document;

@Schema({ timestamps: true })
export class PlayerStats {
  @Prop({ type: Types.ObjectId, ref: 'players' })
  playerId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Match' })
  matchId: Types.ObjectId;

  @Prop({
    type: {
      runs: Number,
      balls: Number,
      fours: Number,
      sixes: Number,
      isOut: Boolean,
    },
    default: {},
  })
  batting: any;

  @Prop({
    type: {
      overs: Number,
      runs: Number,
      wickets: Number,
      wides: Number,
      noBalls: Number,
    },
    default: {},
  })
  bowling: any;
}

export const PlayerStatsSchema = SchemaFactory.createForClass(PlayerStats);
