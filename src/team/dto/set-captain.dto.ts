import { IsMongoId, IsNotEmpty } from 'class-validator';

export class SetCaptainDto {
  @IsMongoId()
  @IsNotEmpty()
  teamId: string;

  @IsMongoId()
  @IsNotEmpty()
  playerId: string;
}
