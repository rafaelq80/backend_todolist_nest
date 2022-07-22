import { IsNotEmpty, MaxLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_tarefas"})
export class Tarefa {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @MaxLength(30)
    @Column({length: 30, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    descricao: string

    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    responsavel: string
    
    @Column()
    data: Date

    @Column()
    status: boolean

}