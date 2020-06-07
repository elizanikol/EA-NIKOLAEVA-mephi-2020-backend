/*import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { PollDto } from '../dto/poll.dto';
import { Question } from './entity/question.entity';
import { QuestionService } from './question.service';
import { UpdateResult } from 'typeorm';

@Controller('poll')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

    @Post()
    create(@Body() pollDto: PollDto): Promise<Question> {
        return this.questionService.create(pollDto);
    }

    @Get()
    findAll(): Promise<Question[]> {
        return this.questionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Question> {
        return this.questionService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.questionService.remove(id);
    }

    @Put()
    async update(@Body() question: Question): Promise<UpdateResult> {
        return await this.questionService.update(question);
    }
}*/
