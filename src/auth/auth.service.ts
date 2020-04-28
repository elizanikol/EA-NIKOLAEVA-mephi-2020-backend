import {Body, Injectable} from '@nestjs/common';
import {UsersService} from '@app/users/users.service';
import {UserDto} from "@app/users/dto/user.dto";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async signUp(@Body() userDto: UserDto): Promise<string> {
        if (await this.usersService.findByName(userDto.userName)) {
            return "such user already exists";
        }
        await this.usersService.create(userDto);
        return "successfully signed up";
    }

    async verify(userName: string, password: string): Promise<boolean> {
        const user = await this.usersService.findByName(userName);
        if (user.password == password) {
            return true;
        }
        return false;
    }

    async login(userName: string, password: string): Promise<string> {
        if (await this.usersService.findByName(userName)) {
            if (await this.verify(userName, password)) {
                return "success";
            }
            return "wrong pair userName/password";
        }
        return "such user name does not exist";
    }
}
