import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type MatchDocument = Match & Document;

@Schema({ timestamps: true })
export class Match {
    @Prop({ type: Types.ObjectId, ref: 'teams' })
    teamA: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'teams' })
    teamB: Types.ObjectId;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Inning' }], default: [] })
    innings: Types.ObjectId[];

    @Prop({ enum: ['not_started', 'in_progress', 'completed'], default: 'not_started' })
    status: string;

    @Prop({ type: Types.ObjectId, ref: 'teams' })
    tossWinner: Types.ObjectId;

    @Prop({ enum: ['bat', 'bowl'] })
    electedTo: string;

    @Prop({ type: Types.ObjectId, ref: 'teams' })
    winner: Types.ObjectId;

    @Prop()
    resultSummary: string;

    @Prop()
    startTime: Date;

    @Prop()
    endTime: Date;
}

export const MatchSchema = SchemaFactory.createForClass(Match);
