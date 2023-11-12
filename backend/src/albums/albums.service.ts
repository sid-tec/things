import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class AlbumsService {
  
  constructor(private readonly prisma: PrismaService){} 
  
  create(createAlbumDto: Prisma.AlbumCreateInput) {
    return this.prisma.album.create({
      data: createAlbumDto
    });
  }
  
  update(id: number, updateAlbumDto: Prisma.AlbumUpdateInput) {
    return this.prisma.album.update({
      data: updateAlbumDto,
      where: {
        id: id
      }
    });
  }

  findAll() {
    return this.prisma.album.findMany();
  }

  findOne(id: number) {
    return this.prisma.album.findUnique({
      where: {
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.album.delete({
      where: {
        id: id
      }
    });
  }
}
