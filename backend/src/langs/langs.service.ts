import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class LangsService {
  
  constructor(private readonly prisma: PrismaService){} 
  
  create(createLangDto: Prisma.LangCreateInput) {
    return this.prisma.lang.create({
      data: createLangDto
    });
  }
  
  update(id: string, updateLangDto: Prisma.LangUpdateInput) {
    return this.prisma.lang.update({
      data: updateLangDto,
      where: {
        id: id
      }
    });
  }

  findAll() {
    return this.prisma.lang.findMany();
  }

  findOne(id: string) {
    return this.prisma.lang.findUnique({
      where: {
        id: id
      }
    });
  }

  remove(id: string) {
    return this.prisma.lang.delete({
      where: {
        id: id
      }
    });
  }
}
