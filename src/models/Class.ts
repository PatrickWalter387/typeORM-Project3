import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { networkInterfaces } from "os";

@Entity("class")
export default class Class{
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