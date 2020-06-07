/*import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository, UpdateResult} from 'typeorm';
import { PollDto } from '../dto/poll.dto';
import { Question } from './entity/question.entity';
import { v4 as uuidv4 } from 'uuid';
import {Poll} from "@app/poll/entities/poll.entity";

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private readonly questionRepository: Repository<Question>,
        private readonly pollRepository: Repository<Poll>,
    ) {}

    create(pollDto: PollDto): Promise<Question> {
        const question = new Question();
        question.question_id = uuidv4();
        for (let q in pollDto.questions) {
            question.question_name = q;
        }
        question.poll_id = this.pollRepository.getId(pollDto);
        return this.questionRepository.save(question);
    }

    async findAll(): Promise<Question[]> {
        return this.questionRepository.find();
    }

    findOne(id: string): Promise<Question> {
        return this.questionRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.questionRepository.delete(id);
    }

    async update(question: Question): Promise<UpdateResult> {
        return await this.questionRepository.update(question.question_id, question);
    }
}*/
