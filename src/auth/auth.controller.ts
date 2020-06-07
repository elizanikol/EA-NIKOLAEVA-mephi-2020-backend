import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes} from '@nestjs/common';
import {ValidationPipe} from '@app/validation/validation.pipe';
import {AuthService} from '@app/auth/auth.service';
import {SignUpDto} from "@app/auth/dto/signUp.dto";
import {LoginDto} from "@app/auth/dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signUp')
    @UsePipes(new ValidationPipe())
    async signUp(@Body() signUpDto: SignUpDto): Promise<string> {
        return this.authService.signUp(signUpDto);
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body() loginDto: LoginDto): Promise<string> {
        return this.authService.login(loginDto);
    }
}
