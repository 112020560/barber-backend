import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: 'customer' })
  user_type: string;
  @Column({ length: 100 })
  phone_number: string;
  @CreateDateColumn()
  createdAt: Date;
}
