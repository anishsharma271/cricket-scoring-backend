import { Module } from '@nestjs/common';
import { OverService } from './over.service';
import { OverController } from './over.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OverSchema, Over } from './schemas/over.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Over.name, schema: OverSchema },
    ]),
  ],
  controllers: [OverController],
  providers: [OverService],
})
export class OverModule { }
