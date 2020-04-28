import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './entities/users.entity';
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from '@app/users/dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(userDto: UserDto): Promise<UserDto> {
    const user = new User();
    user.id = uuidv4();
    user.userName = userDto.userName;
    user.email = userDto.email;
    user.password = userDto.password;
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<UserDto[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<UserDto> {
    return this.usersRepository.findOne(id);
  }

  async findByName(userName: string): Promise<UserDto> {
    return this.usersRepository.findOne({userName: userName});
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
  }
}
