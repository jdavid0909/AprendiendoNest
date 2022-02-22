import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class PostEntity  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'text',nullable:false})
    slug!:string;

    @Column({type:'varchar',length:50})
    title!:string;
    @Column({type:'varchar',length:50})
    excerpt?:string;
    @Column({type:'varchar',length:50})
    content!:string;
    @Column({type:'varchar',length:50})
    category:string;
    @Column({type:'varchar',length:50})
    tags:string[];
    @Column({type:'boolean'})
    status:boolean;

    @CreateDateColumn({type:'timestamp'})
    createdAt:Date;
}