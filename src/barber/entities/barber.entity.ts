import { BarberShop } from "src/barbershop/entities/barbershop.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('barbers')
export class Barber {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BarberShop, (barberShop) => barberShop.barbers)
  barberShop: BarberShop;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
