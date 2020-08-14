import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from "typeorm";
import Class from "./Class";

@Entity("student")
export default class Student{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 45})
    name: string;

    @Column({length: 45, unique: true})
    key: string;

    @ManyToMany(type => Class)
    @JoinTable()
    classes: Class;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}