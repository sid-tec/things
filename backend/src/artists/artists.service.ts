import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ArtistsService {
  
  constructor(private readonly prisma: PrismaService){} 
  
  create(createArtistDto: Prisma.ArtistCreateInput) {
    return this.prisma.artist.create({
      data: createArtistDto
    });
  }
  
  update(id: number, updateArtistDto: Prisma.ArtistUpdateInput) {
    return this.prisma.artist.update({
      data: updateArtistDto,
      where: {
        id: id
      }
    });
  }

  findAll() {
    return this.prisma.artist.findMany();
  }

  findOne(id: number) {
    return this.prisma.artist.findUnique({
      where: {
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.artist.delete({
      where: {
        id: id
      }
    });
  }
}
