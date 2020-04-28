import { Module } from '@nestjs/common';
import {AuthService} from '@app/auth/auth.service';
import {AuthController} from '@app/auth/auth.controller';
import {UsersService} from '@app/users/users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from '@app/users/entities/users.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        UsersService,
    ],
})
export class AuthModule {}
