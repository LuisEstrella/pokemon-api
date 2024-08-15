import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemons/entities/pokemon.entity';
import { DataSource } from 'typeorm';
import { envs } from './config/envs';

@Module({
  imports: [PokemonsModule, 
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: envs.host_mongo_db,
      port: envs.port_mongo_db,
      username: '',
      password: '',
      database: envs.database_mongo_db,
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
