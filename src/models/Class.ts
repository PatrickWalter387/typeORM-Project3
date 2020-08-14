import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";
import Lesson from "./Lesson";

@Entity("class")
export default class Class{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true, length: 100 })
    name: string;

    @Column()
    duration: number;

    @OneToMany(type => Lesson, schoolClass => Class)
    lessons: Lesson[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}