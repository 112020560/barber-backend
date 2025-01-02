import { Barber } from "src/barber/entities/barber.entity";
import { Service } from "src/service/entities/service.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  customer: User;

  @ManyToOne(() => Barber, (barber) => barber.id)
  barber: Barber;

  @ManyToMany(() => Service)
  @JoinTable()
  services: Service[];

  @Column({ type: 'timestamp' })
  appointmentDate: Date;

  @Column({ default: 'pending' })
  status: string; // 'pending', 'confirmed', 'cancelled', 'completed'

  @Column({ nullable: true })
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;
}
