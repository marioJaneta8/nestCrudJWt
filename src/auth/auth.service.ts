import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { RegisterDto } from './dto/register.dto.js';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto.js';
import { JwtService } from '@nestjs/jwt';



export interface Payload {
  email: string;
  rol: string;
}
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,

    private readonly Jwtservice: JwtService,
  ) {}

  async register({ name, email, password }: RegisterDto) {
    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      throw new BadRequestException('El correo ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await this.usersService.create({
      name,
      email,
      password: hashedPassword,
    });
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('El correo no existe');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('La contraseña es incorrecta');
    }

    const payload = { sub: user.id, email: user.email, rol: user.rol };

    const token = await this.Jwtservice.signAsync(payload);

    return {
      token,
      email,
    };
  }

async profile({email}:Payload){

  return await this.usersService.findOneByEmail(email);

 
}


}
