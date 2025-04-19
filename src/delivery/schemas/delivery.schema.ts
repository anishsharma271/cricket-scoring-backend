import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DeliveryDocument = Delivery & Document;

@Schema({ timestamps: true })
export class Delivery {
  @Prop({ type: Types.ObjectId, ref: 'players' })
  batsmanId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'players' })
  bowlerId: Types.ObjectId;

  @Prop({ default: 0 })
  runs: number;

  @Prop({ default: false })
  isWicket: boolean;

  @Prop()
  wicketType: string;

  @Prop({
    type: {
      wide: { type: Boolean, default: false },
      noBall: { type: Boolean, default: false },
      bye: { type: Boolean, default: false },
      legBye: { type: Boolean, default: false },
      overthrow: { type: Number, default: 0 },
    },
    default: {},
  })
  extras: any;

  @Prop()
  description: string;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);
