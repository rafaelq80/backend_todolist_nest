import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tarefa } from "../entities/tarefa.entity";

@Injectable()
export class TarefaService {

    constructor(
        @InjectRepository(Tarefa)
        private tarefaRepository: Repository<Tarefa>
    ) { }

    async findAll(): Promise<Tarefa[]> {
        return await this.tarefaRepository.find();
    }

}

