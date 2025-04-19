import { Controller } from '@nestjs/common';
import { InningService } from './inning.service';

@Controller('inning')
export class InningController {
  constructor(private readonly inningService: InningService) {}
}
