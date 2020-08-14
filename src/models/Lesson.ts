import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("lesson")
export default class Lesson{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string;
}