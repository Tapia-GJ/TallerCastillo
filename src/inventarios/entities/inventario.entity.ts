import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  departamento: string;

  @Column()
  cantidad: number;

  @Column()
  ubicacion: string;
}
