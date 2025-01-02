import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleService {

  constructor(
    @InjectRepository(Schedule)
    private readonly serviceRepository: Repository<Schedule>,
  ) {}

  create = async (createScheduleDto: CreateScheduleDto) => {
    const schedule = this.serviceRepository.create(createScheduleDto);
    return await this.serviceRepository.save(schedule);
  }

  findAll = async() => {
    return await this.serviceRepository.find();
  }

  findOne = async (id: number) => {
    return await this.serviceRepository.findOne({ where: { id } });
  }

  update = async (id: number, updateScheduleDto: UpdateScheduleDto) => {
    return await this.serviceRepository.update(id, updateScheduleDto);
  }

  remove = async (id: number) => {
    return await this.serviceRepository.delete(id);
  }
}
