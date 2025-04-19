import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseInterceptors,
  InternalServerErrorException,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ResponseInterceptor } from 'src/utils/response.interceptor';

@Controller('players')
@UseInterceptors(ResponseInterceptor)
export class PlayerController {
  constructor(private readonly playerService: PlayerService) { }

  @Post("/create-player")
  async create(@Body() dto: CreatePlayerDto) {
    try {
      const result = await this.playerService.create(dto);
      return {
        msg: 'Player created successfully',
        data: result,
      };
    } catch (err) {
      
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }

  @Get("get-players-list")
  async findAll() {
    try {
      const result = await this.playerService.findAll();
      return {
        msg: 'Players retrieved successfully',
        data: result,
      };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }
  @Get("get-players-list-with-associatedteam")
  async get() {
    try {
      const result = await this.playerService.getassociatedwithteam();
      return {
        msg: 'Players retrieved successfully with team',
        data: result,
      };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.playerService.findOne(id);
      return {
        msg: 'Player retrieved successfully',
        data: result,
      };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePlayerDto) {
    try {
      const result = await this.playerService.update(id, dto);
      return {
        msg: 'Player updated successfully',
        data: result,
      };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.playerService.remove(id);
      return {
        msg: 'Player deleted successfully',
        data: result,
      };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }
}
