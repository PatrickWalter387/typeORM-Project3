import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("lesson")
export default class Lesson{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}