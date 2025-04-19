import { Controller } from '@nestjs/common';
import { OverService } from './over.service';

@Controller('over')
export class OverController {
  constructor(private readonly overService: OverService) {}
}
