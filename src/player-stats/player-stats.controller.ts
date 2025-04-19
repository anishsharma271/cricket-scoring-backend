import { Controller } from '@nestjs/common';
import { PlayerStatsService } from './player-stats.service';

@Controller('player-stats')
export class PlayerStatsController {
  constructor(private readonly playerStatsService: PlayerStatsService) {}
}
