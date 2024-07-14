import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventario } from './entities/Inventario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InventariosService {
    constructor(
        @InjectRepository(Inventario)
        private usersRepository: Repository<Inventario>,
    ){

        
    }
    
    public findAll(){
        return this.usersRepository.find()
    }
}