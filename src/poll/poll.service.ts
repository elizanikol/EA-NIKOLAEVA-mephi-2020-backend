/*import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository, UpdateResult} from 'typeorm';
import { PollDto } from './dto/polls-item.dto';
import { Poll } from './entities/poll.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PollService {
  constructor(
    @InjectRepository(Poll)
    private readonly pollRepository: Repository<Poll>,
  ) {}

  create(pollDto: PollDto): Promise<PollDto> {
    const poll = new Poll();
    poll.id = uuidv4();
    poll.name = PollDto.name;
    return this.pollRepository.save(poll);
  }

  async findAll(): Promise<PollDto[]> {
    return this.pollRepository.find();
  }

  findOne(id: string): Promise<PollDto> {
    return this.pollRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pollRepository.delete(id);
  }

  async update(poll: Poll): Promise<UpdateResult> {
    return await this.pollRepository.update(poll.id, poll);
  }
}*/
