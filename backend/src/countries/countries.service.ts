import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class CountriesService {
  
  constructor(private readonly prisma: PrismaService){} 
  
  create(createCountryDto: Prisma.CountryCreateInput) {
    return this.prisma.country.create({
      data: createCountryDto
    });
  }
  
  update(id: string, updateCountryDto: Prisma.CountryUpdateInput) {
    return this.prisma.country.update({
      data: updateCountryDto,
      where: {
        id: id
      }
    });
  }

  findAll() {
    return this.prisma.country.findMany();
  }

  findOne(id: string) {
    return this.prisma.country.findUnique({
      where: {
        id: id
      }
    });
  }

  remove(id: string) {
    return this.prisma.country.delete({
      where: {
        id: id
      }
    });
  }
}
