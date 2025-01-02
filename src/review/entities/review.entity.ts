import { Barber } from "src/barber/entities/barber.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  customer: User;

  @ManyToOne(() => Barber, (barber) => barber.id)
  barber: Barber;

  @Column({ type: 'text' })
  comment: string;

  @Column({ type: 'int', default: 5 })
  rating: number; // 1 a 5

  @CreateDateColumn()
  createdAt: Date;
}
