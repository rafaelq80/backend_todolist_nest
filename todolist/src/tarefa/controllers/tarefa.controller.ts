import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Tarefa } from "../entities/tarefa.entity";
import { TarefaService } from "../services/tarefa.service";

@Controller("/tarefas")
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tarefa[]> {
    return this.tarefaService.findAll();
  }

}