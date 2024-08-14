import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemons/entities/pokemon.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [PokemonsModule, 
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      username: '',
      password: '',
      database: 'pokemonDB',
      entities: [Pokemon],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(private dataSource: DataSource) {
    
  }

}
