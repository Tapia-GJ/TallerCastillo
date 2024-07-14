import { Controller, Get } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { Inventario } from './entities/inventario.entity';

@Controller('inventarios')
export class InventariosController {
  constructor(private readonly inventarioService: InventariosService) {}

  @Get()
  async findAll(): Promise<Inventario[]> {
    return await this.inventarioService.findAll();
  }
}
