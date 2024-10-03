import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HerramientaService } from './herramientas.service';
import { HerramientaController } from './herramientas.controller';
import { Herramienta } from './entities/herramienta.entity';
import { Empleado } from '../empleados/entities/empleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Herramienta, Empleado])],
  controllers: [HerramientaController],
  providers: [HerramientaService],
})
export class HerramientasModule {}
