import { Body, Controller, Get, Post } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { Inventario } from './entities/inventario.entity';
import { CreateInventoryDto } from './dto/create-inventario.dto';

@Controller('inventarios')
export class InventariosController {
  constructor(private readonly inventarioService: InventariosService) {}

  @Get()
  async findAll(): Promise<Inventario[]> {
    return await this.inventarioService.findAll();
  }
  @Post()
  async createInventory(@Body() newInventory: CreateInventoryDto): Promise<Inventario> {
    return await this.inventarioService.createInventario(newInventory);
  }
  
}
