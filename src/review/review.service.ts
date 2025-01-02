import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {

  constructor(
    @InjectRepository(Review)
    private readonly serviceRepository: Repository<Review>,
  ) {}

  create = async(createReviewDto: CreateReviewDto) => {
    const review = this.serviceRepository.create(createReviewDto);
    return await this.serviceRepository.save(review);
  }

  findAll = async() => {
    return await this.serviceRepository.find();
  } 

  findOne = async (id: number) => {
    return await this.serviceRepository.findOne({ where: { id } });
  }

  update = async(id: number, updateReviewDto: UpdateReviewDto) => {
    return await this.serviceRepository.update(id, updateReviewDto);
  }

  remove = async(id: number) => {
    return await this.serviceRepository.delete(id);
  }
}
