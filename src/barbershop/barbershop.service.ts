import { Injectable } from '@nestjs/common';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { BarberShop } from './entities/barbershop.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BarbershopService {
  constructor(
    @InjectRepository(BarberShop)
    private readonly barberShopRepository: Repository<BarberShop>,
  ) {}

  create  = async(createBarbershopDto: CreateBarbershopDto) => {
    const barberShop = this.barberShopRepository.create(createBarbershopDto);
    return await this.barberShopRepository.save(barberShop);
  }

  findAll = async()=> {
    return await this.barberShopRepository.find();
  }

  findOne = async(id: number) => {
    return await this.barberShopRepository.findOne({ where: { id } });
  }

  update = async(id: number, updateBarbershopDto: UpdateBarbershopDto)=> {
    return await this.barberShopRepository.update(id, updateBarbershopDto);
  }

  remove = async(id: number) => {
    return await this.barberShopRepository.delete(id);
  }
}
