import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LangsService } from './langs.service';
import { Prisma } from '@prisma/client';


@Controller('langs')
export class LangsController {
  constructor(private readonly langsService: LangsService) {}

  @Post()
  create(@Body() createLangDto: Prisma.LangCreateInput) {
    return this.langsService.create(createLangDto);
  }

  @Get()
  findAll() {
    return this.langsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLangDto: Prisma.LangUpdateInput) {
    return this.langsService.update(id, updateLangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.langsService.remove(id);
  }
}
