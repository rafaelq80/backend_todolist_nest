import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
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

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Tarefa> {
    return this.tarefaService.findById(id);
  }
    
  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Tarefa[]> {
    return this.tarefaService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() tarefa: Tarefa): Promise<Tarefa> {
    return this.tarefaService.create(tarefa);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() tarefa: Tarefa): Promise<Tarefa> {
    return this.tarefaService.update(tarefa);
  }
  
}