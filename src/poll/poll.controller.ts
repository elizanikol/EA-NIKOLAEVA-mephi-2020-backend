import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { PollDto } from './dto/poll.dto';
import { Poll } from './entities/poll.entity';
import { PollService } from './poll.service';
import { UpdateResult } from 'typeorm';

@Controller('poll')
export class PollController {
  constructor(private readonly pollService: PollService) {}

  @Post()
  create(@Body() pollDto: PollDto): Promise<Poll> {
    return this.pollService.create(pollDto);
  }

  @Get()
  findAll(): Promise<Poll[]> {
    return this.pollService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Poll> {
    return this.pollService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.pollService.remove(id);
  }

  @Put()
  async update(@Body() poll: Poll): Promise<UpdateResult> {
    return await this.pollService.update(poll);
  }
}
