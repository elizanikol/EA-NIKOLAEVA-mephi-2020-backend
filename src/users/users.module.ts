import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from '@app/users/users.controller';
import { User } from '@app/users/entities/users.entity';
import {UsersService} from '@app/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [
    UsersController,
  ],
  providers: [
    UsersService,
  ],
})
export class UsersModule {}
