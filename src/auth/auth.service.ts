import {Body, Injectable} from '@nestjs/common';
import {UsersService} from '@app/users/users.service';
import {UserDto} from "@app/users/dto/user.dto";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async signUp(userDto: UserDto): Promise<string> {
        if (await this.usersService.findByEmail(userDto.email)) {
            return "such email already exists";
        }
        await this.usersService.create(userDto);
        return "successfully signed up";
    }

    async verify(email: string, password: string): Promise<boolean> {
        const user = await this.usersService.findByEmail(email);
        return (user.password == password);
    }

    async login(email: string, password: string): Promise<string> {
        if (await this.usersService.findByEmail(email)) {
            if (await this.verify(email, password)) {
                return "success";
            }
            return "wrong pair email/password";
        }
        return "such username does not exist";
    }
}
