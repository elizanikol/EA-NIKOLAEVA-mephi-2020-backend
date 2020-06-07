import {Body, Injectable} from '@nestjs/common';
import {UsersService} from '@app/users/users.service';
import {SignUpDto} from "@app/auth/dto/signUp.dto";
import {LoginDto} from "@app/auth/dto/login.dto";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async signUp(signUpDto: SignUpDto): Promise<string> {
        if (await this.usersService.findByEmail(signUpDto.email)) {
            return "such email already exists";
        }
        await this.usersService.create(signUpDto);
        return "successfully signed up";
    }

    async verify(email: string, password: string): Promise<boolean> {
        const user = await this.usersService.findByEmail(email);
        return (user.password == password);
    }

    async login(loginDto: LoginDto): Promise<string> {
        if (await this.usersService.findByEmail(loginDto.email)) {
            if (await this.verify(loginDto.email, loginDto.password)) {
                return "success";
            }
            return "wrong pair email/password";
        }
        return "such username does not exist";
    }
}
