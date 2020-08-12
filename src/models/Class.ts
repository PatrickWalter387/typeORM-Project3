import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("class")
export class Class{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true, length: 100 })
    name: string;

    @Column()
    duration: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}