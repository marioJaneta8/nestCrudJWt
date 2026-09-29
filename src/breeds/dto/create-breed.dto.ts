import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateBreedDto {

  @IsString()
  @MinLength(3, {message: "La raza debe tener al menos 3 caracteres"})
  name: string;
}
