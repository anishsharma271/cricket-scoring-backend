import { Module } from '@nestjs/common';
import { InningService } from './inning.service';
import { InningController } from './inning.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InningSchema, Inning } from './schemas/inning.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inning.name, schema: InningSchema },
    ]),
  ],
  controllers: [InningController],
  providers: [InningService],
})
export class InningModule { }
