import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BarbershopModule } from './barbershop/barbershop.module';
import { BarberModule } from './barber/barber.module';
import { ServiceModule } from './service/service.module';
import { ScheduleModule } from './schedule/schedule.module';
import { OrderModule } from './order/order.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
  TypeOrmModule.forRoot({
    type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true, // Cambiar a false en producción
      logging: true,
  }),
  UsersModule,
  BarbershopModule,
  BarberModule,
  ServiceModule,
  ScheduleModule,
  OrderModule,
  ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
