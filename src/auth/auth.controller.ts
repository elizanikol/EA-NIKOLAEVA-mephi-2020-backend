import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes} from '@nestjs/common';
import { UserDto } from '@app/users/dto/user.dto';
import {ValidationPipe} from '@app/validation/validation.pipe';
import {AuthService} from '@app/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signUp')
    @UsePipes(new ValidationPipe())
    async signUp(@Body() userDto: UserDto): Promise<string> {
        return this.authService.signUp(userDto);
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body() userName: string, @Body() password: string): Promise<string> {
        return this.authService.login(userName, password);
    }
}
