import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
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

    async findById(id: number): Promise<Tarefa> {
        let tarefa = await this.tarefaRepository.findOne({
            where: {
                id
            }
        });

        if (!tarefa)
            throw new HttpException('Tarefa não existe', HttpStatus.NOT_FOUND);

        return tarefa;
    }

    async findByNome(nome: string): Promise<Tarefa[]> {
        return await this.tarefaRepository.find({
            where: {
                nome: ILike(`%${nome}%`),
            }
        })
    }
    
}