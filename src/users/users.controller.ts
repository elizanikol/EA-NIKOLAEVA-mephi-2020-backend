import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes} from '@nestjs/common';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';
import { UpdateResult } from 'typeorm';
import { UserDto } from '@app/users/dto/user.dto';
import {ValidationPipe} from '@app/validation/validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() userDto: UserDto): Promise<UserDto> {
    return this.usersService.create(userDto);
  }

  @Get()
  findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }

  @Put()
  async update(@Body() user: User): Promise<UpdateResult> {
    return await this.usersService.update(user);
  }
}
