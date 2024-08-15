import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { ObjectId } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    //Revisar
    return this.pokemonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.pokemonsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonsService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.pokemonsService.remove(id);
  }
}
