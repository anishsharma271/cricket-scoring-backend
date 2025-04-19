import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreatePlayerDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    role: 'batsman' | 'bowler' | 'allrounder' | 'wicketkeeper';

    @IsNotEmpty()
    @IsMongoId()
    teamId: Types.ObjectId;;
}
