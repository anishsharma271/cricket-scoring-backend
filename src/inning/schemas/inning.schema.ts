import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type InningDocument = Inning & Document;

@Schema({ timestamps: true })
export class Inning {
    @Prop({ type: Types.ObjectId, ref: 'Match' })
    matchId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'teams' })
    battingTeamId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'teams' })
    bowlingTeamId: Types.ObjectId;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Over' }], default: [] })
    overs: Types.ObjectId[];

    @Prop({ default: 0 })
    totalRuns: number;

    @Prop({ default: 0 })
    totalWickets: number;

    @Prop({
        type: {
            wide: { type: Number, default: 0 },
            noBall: { type: Number, default: 0 },
            bye: { type: Number, default: 0 },
            legBye: { type: Number, default: 0 },
        },
        default: {},
    })
    extras: any;
}

export const InningSchema = SchemaFactory.createForClass(Inning);
