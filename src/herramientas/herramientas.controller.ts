import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { HerramientaService } from './herramientas.service';
import { CreateHerramientaDto } from './dto/create-herramienta.dto';
import { UpdateHerramientaDto } from './dto/update-herramienta.dto';

@Controller('herramientas')
export class HerramientaController {
  constructor(private readonly herramientaService: HerramientaService) {}

  @Post()
  create(@Body() createHerramientaDto: CreateHerramientaDto) {
    return this.herramientaService.create(createHerramientaDto);
  }

  @Get()
  findAll() {
    return this.herramientaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.herramientaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHerramientaDto: UpdateHerramientaDto) {
    return this.herramientaService.update(+id, updateHerramientaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.herramientaService.remove(+id);
  }
}
