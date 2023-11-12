import { Module } from '@nestjs/common';
import { LangsService } from './langs.service';
import { LangsController } from './langs.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [LangsController],
  providers: [LangsService],
})
export class LangsModule {}
