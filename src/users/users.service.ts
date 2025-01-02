import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create = async (createUserDto: CreateUserDto): Promise<User> => {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  };

  findAll = async (): Promise<User[]> => {
    return await this.userRepository.find();
  }

  findOne = async (id: number): Promise<User> => {
    return await this.userRepository.findOne({ where: { id } });
  }

  update = async (id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> => {
    return await this.userRepository.update(id, updateUserDto)
  }

  remove = async (id: number) => {
    return await this.userRepository.delete(id);
  }
}
