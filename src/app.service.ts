import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Cricket Scoring-backend server running successfully';
  }
}
