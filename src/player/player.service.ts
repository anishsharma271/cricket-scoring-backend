import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Player, PlayerDocument } from './schemas/player.schema';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
    constructor(
        @InjectModel(Player.name) private playerModel: Model<PlayerDocument>
    ) { }

    async create(dto: CreatePlayerDto): Promise<Player> {
        if (dto.teamId) {
            dto.teamId = new Types.ObjectId(dto.teamId);
        }

        const created = await this.playerModel.create(dto);
        if (!created) {
            throw new InternalServerErrorException('Player creation failed');
        }

        return created;
    }


    async findAll(): Promise<Player[]> {
        const players = await this.playerModel.find();

        if (!players) {
            throw new NotFoundException("data not found")
        }
        return players;
    }
    async getassociatedwithteam(): Promise<Player[]> {
        const players = await this.playerModel.find().populate({
            path: 'teamId',
            select: 'name',
        });;
        if (!players) {
            throw new NotFoundException("data not found")
        }
        return players;
    }

    async findOne(id: string): Promise<Player> {
        const player = await this.playerModel.findById(id).populate('teamId');
        if (!player) {
            throw new NotFoundException('Player not found');
        }
        return player;
    }

    async update(id: string, dto: UpdatePlayerDto): Promise<Player> {
        const updated = await this.playerModel.findByIdAndUpdate(id, dto, {
            new: true,
        });
        if (!updated) {
            throw new NotFoundException('Player not found for update');
        }
        return updated;
    }

    async remove(id: string): Promise<Player> {
        const deleted = await this.playerModel.findByIdAndDelete(id);
        if (!deleted) {
            throw new NotFoundException('Player not found for deletion');
        }
        return deleted;
    }
}
