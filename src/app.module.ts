import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MatchModule } from './match/match.module';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { InningModule } from './inning/inning.module';
import { OverModule } from './over/over.module';
import { DeliveryModule } from './delivery/delivery.module';
import { PlayerStatsModule } from './player-stats/player-stats.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      useFactory: () => {
        const uri = process.env.MONGO_URI;
        if (!uri) {
          throw new Error('MONGO_URI environment variable is not defined');
        }
        console.log("DB Connected")
        return {
          uri,
        };
      },
    }),

    MatchModule,
    TeamModule,
    PlayerModule,
    InningModule,
    OverModule,
    DeliveryModule,
    PlayerStatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
