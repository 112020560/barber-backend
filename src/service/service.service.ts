import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {

  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}


  create = async (createServiceDto: CreateServiceDto) => {
    const service = this.serviceRepository.create(createServiceDto);
    return await this.serviceRepository.save(service);
  }

  findAll = async () => {
    return await this.serviceRepository.find();
  }

  findOne  = async (id: number) => {
    return await this.serviceRepository.findOne({ where: { id } });
  }

  update = async (id: number, updateServiceDto: UpdateServiceDto) => {
    return await this.serviceRepository.update(id, updateServiceDto);
  }

  remove = async(id: number) => {
    return await this.serviceRepository.delete(id);
  }
}
