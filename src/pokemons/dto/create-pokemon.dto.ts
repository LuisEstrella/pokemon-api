import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePokemonDto {

  @IsNotEmpty()
  @IsString()
  readonly Name: string;

  @IsNotEmpty()
  @IsString()
  readonly Type: string;

  @IsNotEmpty()
  @IsNumber()
  readonly Level: number;

  @IsNotEmpty()
  @IsString()
  readonly Image: string;
  
}
