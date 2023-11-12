import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsModule } from './things/things.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';
import { CountriesModule } from './countries/countries.module';
import { LangsModule } from './langs/langs.module';
import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';
import { TraksModule } from './tracks/tracks.module';

@Module({
  imports: [ThingsModule, CategoriesModule, CommonModule, CountriesModule, LangsModule, ArtistsModule, AlbumsModule, TraksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
