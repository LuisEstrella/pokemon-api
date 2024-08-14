import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId, Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}
  
  create(pokemon: CreatePokemonDto) {
    
    return this.pokemonRepository.insert(pokemon);;
  }

  findAll() {
    
    return this.pokemonRepository.find();;
  }

  findOne(id: ObjectId) {

    return this.pokemonRepository.findOneBy({id});;
  }

  update(id: ObjectId, updatePokemonDto: UpdatePokemonDto) {

    return this.pokemonRepository.update(id,{ Name: updatePokemonDto.Name, Type: updatePokemonDto.Type, Level: updatePokemonDto.Level, Image: updatePokemonDto.Image })
  }

  remove(id: ObjectId) {
    this.pokemonRepository.delete(id);
    return `This action removes a #${id} pokemon`;
  }
}
