import { Module } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
  imports: [TypeOrmModule.forFeature([Pokemon])],
})
export class PokemonsModule {}
