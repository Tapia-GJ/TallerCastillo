import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Entity()
export class RegistroAsistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  entrada: Date;

  @Column()
  salida: Date;

  @ManyToOne(() => Empleado, (empleado) => empleado.registrosAsistencia)
  empleado: Empleado;
}
