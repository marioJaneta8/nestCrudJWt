import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, minLength, MinLength } from "class-validator";

export class RegisterDto{
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1,{message:'El Minimo es de 1 caracter'})
    @IsNotEmpty({message:'El nombre es requerido'})
    name: string;
    
    
    @IsEmail()
    @IsNotEmpty({message:'El email es requerido'})
    email: string;

    @Transform(({value}) => value.trim())
    @IsString()
     @IsNotEmpty({message:'La contraseña es requerida'})
    @MinLength(6,{message:'La contraseña debe tener al menos 6 caracteres'})
    password: string;
}