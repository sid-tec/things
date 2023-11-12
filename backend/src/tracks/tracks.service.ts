import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class TracksService {
  
  constructor(private readonly prisma: PrismaService){} 
  
  create(createTrackDto: Prisma.TrackCreateInput) {
    return this.prisma.track.create({
      data: createTrackDto
    });
  }
  
  update(id: number, updateTrackDto: Prisma.TrackUpdateInput) {
    return this.prisma.track.update({
      data: updateTrackDto,
      where: {
        id: id
      }
    });
  }

  findAll() {
    return this.prisma.track.findMany();
  }

  findOne(id: number) {
    return this.prisma.track.findUnique({
      where: {
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.track.delete({
      where: {
        id: id
      }
    });
  }
}
