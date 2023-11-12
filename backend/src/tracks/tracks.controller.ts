import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { Prisma } from '@prisma/client';


@Controller('tracks')
export class TracksController {
  constructor(private readonly traksService: TracksService) {}

  @Post()
  create(@Body() createTrackDto: Prisma.TrackCreateInput) {
    return this.traksService.create(createTrackDto);
  }

  @Get()
  findAll() {
    return this.traksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.traksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrakDto: Prisma.TrackUpdateInput) {
    return this.traksService.update(+id, updateTrakDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.traksService.remove(+id);
  }
}
