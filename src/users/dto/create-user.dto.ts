import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(8,{message:'la contraseña debe tener al menos 8 caracteres'})
    password:string;
    @IsOptional()
    @IsString()
    name?:string;
  
    








}
