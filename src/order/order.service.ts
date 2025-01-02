import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly serviceRepository: Repository<Order>,
  ) {}

  create = async (createOrderDto: CreateOrderDto) =>{
    const order = this.serviceRepository.create(createOrderDto);
    return await this.serviceRepository.save(order);
  }

  findAll = async() => {
    return await this.serviceRepository.find();
  }

  findOne = async (id: number) =>  {
    return  await this.serviceRepository.findOne({ where: { id } });
  }

  update = async (id: number, updateOrderDto: UpdateOrderDto) => {
    return await this.serviceRepository.update(id, updateOrderDto);
  }

  remove = async(id: number) => {
    return await this.serviceRepository.delete(id);
  }
}
