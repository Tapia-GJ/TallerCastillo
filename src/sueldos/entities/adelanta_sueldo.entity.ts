import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class AdelantoSueldo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  montolunes: number;

  @Column()
  montomartes: number;

  @Column()
  montomiercoles: number;

  @Column()
  montojueves: number;

  @Column()
  montoviernes: number;

  @Column()
  montosabado: number;

  @Column({ nullable: true })
  sueldoneto: number;

  @Column({ nullable: true })
  sueldodisponible: number;

  @ManyToOne(() => Empleado, empleado => empleado.adelantosSueldo, { eager: true })
  empleado: Empleado;

  @BeforeInsert()
  @BeforeUpdate()
  validateAndCalculate() {
    if (!this.empleado || typeof this.empleado.sueldo_semanal !== 'number') {
      throw new Error('Empleado no encontrado o sueldo semanal no disponible');
    }

    this.sueldoneto = this.empleado.sueldo_semanal;

    const totalAdelanto = this.montolunes + this.montomartes + this.montomiercoles + this.montojueves + this.montoviernes + this.montosabado;

    if (totalAdelanto <= this.sueldoneto) {
      this.sueldodisponible = this.sueldoneto - totalAdelanto;
    } else {
      throw new Error('El adelanto total excede el sueldo neto.');
    }
  }
}
