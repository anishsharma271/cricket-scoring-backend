import { Module } from '@nestjs/common';
import { PlayerStatsService } from './player-stats.service';
import { PlayerStatsController } from './player-stats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerStatsSchema, PlayerStats } from './schemas/player-stats.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlayerStats.name, schema: PlayerStatsSchema },
    ]),
  ],
  controllers: [PlayerStatsController],
  providers: [PlayerStatsService],
})
export class PlayerStatsModule { }
