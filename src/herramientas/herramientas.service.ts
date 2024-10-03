import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Herramienta } from './entities/herramienta.entity';
import { CreateHerramientaDto } from './dto/create-herramienta.dto';
import { UpdateHerramientaDto } from './dto/update-herramienta.dto';
import { Empleado } from '../empleados/entities/empleado.entity';

@Injectable()
export class HerramientaService {
  constructor(
    @InjectRepository(Herramienta)
    private readonly herramientaRepository: Repository<Herramienta>,
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}

  // Método para crear una herramienta
  async create(createHerramientaDto: CreateHerramientaDto): Promise<Herramienta> {
    const empleado = await this.empleadoRepository.findOne({ where: { id: createHerramientaDto.empleadoId } });
    if (!empleado) {
      throw new NotFoundException('Empleado no encontrado');
    }

    const herramienta = this.herramientaRepository.create({
      ...createHerramientaDto,
      empleado,
    });

    return this.herramientaRepository.save(herramienta);
  }

  // Método para actualizar una herramienta
  async update(id: number, updateHerramientaDto: UpdateHerramientaDto): Promise<Herramienta> {
    const herramienta = await this.herramientaRepository.preload({
      id,
      ...updateHerramientaDto,
    });

    if (!herramienta) {
      throw new NotFoundException('Herramienta no encontrada');
    }

    if (updateHerramientaDto.empleadoId) {
      const empleado = await this.empleadoRepository.findOne({ where: { id: updateHerramientaDto.empleadoId } });
      if (!empleado) {
        throw new NotFoundException('Empleado no encontrado');
      }
      herramienta.empleado = empleado;
    }

    return this.herramientaRepository.save(herramienta);
  }

  // Método para obtener todas las herramientas
  async findAll(): Promise<Herramienta[]> {
    return this.herramientaRepository.find({ relations: ['empleado'] });
  }

  // Método para obtener una herramienta por ID
  async findOne(id: number): Promise<Herramienta> {
    return this.herramientaRepository.findOne({ where: { id }, relations: ['empleado'] });
  }

  // Método para eliminar una herramienta por ID
  async remove(id: number): Promise<void> {
    await this.herramientaRepository.delete(id);
  }
}
