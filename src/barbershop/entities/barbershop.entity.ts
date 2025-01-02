import { Barber } from "src/barber/entities/barber.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('barber_shops')
export class BarberShop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 255 })
  address: string;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column({ nullable: true })
  phone: string;

  @OneToMany(() => Barber, (barber) => barber.barberShop)
  barbers: Barber[];

  @CreateDateColumn()
  createdAt: Date;
}

