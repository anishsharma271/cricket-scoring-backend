import { Controller, Get, Post, Body, Param, Patch, Delete, UseInterceptors, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ResponseInterceptor } from 'src/utils/response.interceptor';
import { SetCaptainDto } from './dto/set-captain.dto';

@Controller('teams')
@UseInterceptors(ResponseInterceptor)
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Post("/create-team")
  async create(@Body() dto: CreateTeamDto) {
    try {
      const result = await this.teamService.create(dto);
      return { msg: "team created successfully " };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }

  @Get("/get-team")
  async findAll() {
    try {
      const result = await this.teamService.findAll();
      return { msg: 'Teams retrieved successfully', data: result };
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw err;
      }
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.teamService.findOne(id);
      return { msg: 'Team retrieved successfully', data: result };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }
  @Get('/with-players/:id')
  async getOne(@Param('id') id: string) {
    try {
      const result = await this.teamService.getOneAssociatedwithplayers(id);
      return { msg: 'Team retrieved successfully', data: result };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateTeamDto) {
    try {
      const result = await this.teamService.update(id, dto);
      return { msg: 'Team updated successfully', data: result };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }

  @Post('/set-caption')
  async setCaption(@Body() dto: SetCaptainDto) {
    try {
      const result = await this.teamService.setCaptain(dto);
      return { msg: 'caption appoint successfully', data: result };
    } catch (err) {
      console.log("errr", err);

      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }



  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.teamService.remove(id);
      return { msg: 'Team deleted successfully', data: result };
    } catch (err) {
      throw new InternalServerErrorException(err.message || 'Something went wrong');
    }
  }
}
