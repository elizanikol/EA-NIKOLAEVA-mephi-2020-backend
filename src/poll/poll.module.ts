import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PollService} from '@app/poll/poll.service';
import {PollController} from '@app/poll/poll.controller';
import {Poll} from '@app/poll/entities/poll.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poll]),
  ],
  controllers: [
    PollController,
  ],
  providers: [
    PollService,
  ],
})
export class PollModule {}
