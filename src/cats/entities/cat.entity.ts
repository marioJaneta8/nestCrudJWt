import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Breed } from '../../breeds/entities/breed.entity.js';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
  
  @ManyToOne(() => Breed, (breed) => breed.cats, {
    eager: true, // carga la relacion automaticamente al hacer find()
  })
  @JoinColumn({ name: 'breedId' })
  breed: Breed;


  @DeleteDateColumn()
  deletedAt: Date;
}
