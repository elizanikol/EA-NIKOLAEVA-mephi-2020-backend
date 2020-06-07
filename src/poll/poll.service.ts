import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository, UpdateResult} from 'typeorm';
import { PollDto } from './dto/poll.dto';
import { Poll } from './entities/poll.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PollService {
  constructor(
    @InjectRepository(Poll)
    private readonly pollRepository: Repository<Poll>,
  ) {}

  create(pollDto: PollDto): Promise<Poll> {
    const poll = new Poll();
    poll.poll_id = uuidv4();
    poll.poll_name = pollDto.poll_name;
    poll.option1 = pollDto.option1;
    poll.option2 = pollDto.option2;
    poll.option3 = pollDto.option3;
    return this.pollRepository.save(poll);
  }

  async findAll(): Promise<Poll[]> {
    return this.pollRepository.find();
  }

  findOne(id: string): Promise<Poll> {
    return this.pollRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pollRepository.delete(id);
  }

  async update(poll: Poll): Promise<UpdateResult> {
    return await this.pollRepository.update(poll.poll_id, poll);
  }
}
