import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export default class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  name: string;
  @Column({
    type: 'text',
  })
  model: string;

  @Column({
    type: 'integer',
  })
  year: number;

  @Column({
    type: 'text',
  })
  plate: string;

  @Column({
    type: 'text',
  })
  imageUrl: string;
}
