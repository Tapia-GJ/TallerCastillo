import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Empleado } from '../../empleados/entities/empleado.entity';

@Entity()
export class Herramienta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  cantidad: number;

  @Column({ nullable: true })
  observacion: string;

  @ManyToOne(() => Empleado, (empleado) => empleado.herramientas, { onDelete: 'CASCADE' })
  empleado: Empleado;
}
