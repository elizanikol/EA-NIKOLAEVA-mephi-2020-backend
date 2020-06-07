import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './entities/users.entity';
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from '@app/users/dto/user.dto';
import {SignUpDto} from "@app/auth/dto/signUp.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(signUpDto: SignUpDto): Promise<UserDto> {
    const user = new User();
    user.id = uuidv4();
    user.userName = signUpDto.userName;
    user.email = signUpDto.email;
    user.password = signUpDto.password;
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<UserDto[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<UserDto> {
    return this.usersRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<UserDto> {
    return this.usersRepository.findOne({email: email});
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
  }
}
