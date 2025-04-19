import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OverDocument = Over & Document;

@Schema({ timestamps: true })
export class Over {
  @Prop({ type: Types.ObjectId, ref: 'Inning' })
  inningId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'players' })
  bowlerId: Types.ObjectId;

  @Prop()
  overNumber: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Delivery' }], default: [] })
  deliveries: Types.ObjectId[];
}

export const OverSchema = SchemaFactory.createForClass(Over);
