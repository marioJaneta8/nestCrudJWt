import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { JwtAuthGuard } from './guard/jwt-auth.guards.js';
import type { Request as ExpressRequest } from 'express';
@Controller('auth')
export class AuthController {

constructor(private readonly authService: AuthService){}


  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  //ruta get  para extraer el token y mediante el token mostrar el perfil del usuario
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Req() req: ExpressRequest) {
  
    return this.authService.profile({
      email:req.user?.email,
      rol:req.user?.rol,
    });
  }
}




