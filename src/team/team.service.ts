import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Team, TeamDocument } from './schemas/team.schema';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { SetCaptainDto } from './dto/set-captain.dto';

@Injectable()
export class TeamService {
    constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) { }

    async create(dto: CreateTeamDto): Promise<boolean> {
        const created = await this.teamModel.create(dto);

        if (!created) {
            throw new InternalServerErrorException('Something went wrong');
        }

        return true;
    }

    async findAll(): Promise<Team[]> {
        const data = await this.teamModel.find().select("name");


        if (!data.length) {
            throw new NotFoundException('Data not found');
        }
        return data;
    }




    async findOne(id: string): Promise<Team> {
        const data = await this.teamModel.findById(id);
        if (!data) {
            throw new NotFoundException('Team not found');
        }
        return data;
    }
    async getOneAssociatedwithplayers(teamId: string): Promise<any> {
        const data = await this.teamModel.aggregate([
            {
                $match: { _id: new Types.ObjectId(teamId) },
            },
            {
                $lookup: {
                    from: 'players',
                    localField: '_id',
                    foreignField: 'teamId',
                    as: 'players',
                },
            },
            {
                $project: {
                    name: 1,
                    players: 1,
                    createdAt: 1,
                    updatedAt: 1,
                },
            },
        ]);

        if (!data.length) {
            throw new NotFoundException('Team not found');
        }

        return data[0];
    }





    async update(id: string, dto: UpdateTeamDto): Promise<Team> {
        const update = await this.teamModel.findByIdAndUpdate(id, dto, { new: true });
        if (!update) {
            throw new InternalServerErrorException('Something went wrong');
        }
        return update;
    }
    async setCaptain(dto: SetCaptainDto): Promise<Team> {
        const update = await this.teamModel.findByIdAndUpdate({ _id: dto.teamId }, { captainId: new Types.ObjectId(dto.playerId) }, { new: true });
        console.log("update", update);

        if (!update) {
            throw new InternalServerErrorException('Something went wrong');
        }
        return update;
    }


    async remove(id: string): Promise<any> {
        return this.teamModel.findByIdAndDelete(id);
    }
}
