import { Module } from '@nestjs/common';
import { BarbershopService } from './barbershop.service';
import { BarbershopController } from './barbershop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarberShop } from './entities/barbershop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BarberShop])],
  controllers: [BarbershopController],
  providers: [BarbershopService],
})
export class BarbershopModule {}
