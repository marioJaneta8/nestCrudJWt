import { IsInt, IsNotEmpty, IsNumber, IsOptional, isPositive, IsPositive, IsString, MaxLength } from "class-validator";

export class CreateCatDto {
    @IsString()
    @MaxLength(100)
    name:string;
    
    
    @IsNumber()
    @IsPositive()
    age:number;
    
    
    @IsInt()
    @IsPositive()
   breedId:number;
    







}

