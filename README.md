# Projeto Todo-List - Mobile

<br />

<div align="center">
   <img src="https://i.imgur.com/icgjsRQ.png" title="source: imgur.com" width="50%"/>
</div>

<br /><br />

## Diagrama de Classes

```mermaid
classDiagram
class Categoria {
  - id : number
  - descricao : String
  - tarefa : List ~Produto~
  + findAll()
  + findById(id : number)
  + findByDescricao(descricao : string)
  + create(categoria : Categoria)
  + update(categoria : Categoria)
  + delete(id : number)
}
class Tarefa {
  - id : number
  - nome : string
  - descricao: string
  - responsavel: string
  - data: Date
  - status: boolean
  - categoria: Categoria
  + findAll()
  + findById(id : number)
  + findByDescricao(descricao : string)
  + create(categoria : Categoria)
  + update(categoria : Categoria)
  + delete(id : number)
}
Categoria --> Tarefa
```
<br /><br />

# Referências sobre NestJS

<br />

<a href="https://docs.nestjs.com/" target="_blank">Documentação Oficial do NestJS</a>

<a href="https://typeorm.io/" target="_blank">Documentação Oficial do TypeORM</a>

<a href="https://www.typescriptlang.org/pt/docs/" target="_blank">Documentação Oficial TypeScript</a>

<a href="https://docs.npmjs.com/" target="_blank">Documentação do NPM</a>

<a href="https://www.tutorialspoint.com/typeorm/typeorm_quick_guide.htm" target="_blank">Guia do TypeORM</a>
