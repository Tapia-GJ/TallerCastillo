import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empresas')
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  correo: string;

  @Column({ length: 50 })
  telefono: string;

  @Column({ length: 255 })
  encargado: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean; // true = operando, false = no opera

  @Column({ length: 255 })
  ubicacion: string;
}
