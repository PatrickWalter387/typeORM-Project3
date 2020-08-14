import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import Content from "./Content";
import Class from "./Class";

@Entity("lesson")
export default class Lesson{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string;

    @OneToOne(type => Content, lesson => Lesson)
    content: Content

    @ManyToOne(type => Class, lessons => Lesson, { eager: true })
    @JoinColumn()
    schoolClass: Class;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}