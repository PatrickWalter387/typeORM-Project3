import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";
import Lesson from "./Lesson";

@Entity("content")
export default class Content{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string;
    
    @Column({name: "link_content", length: 45})
    linkContent: string;

    @OneToOne(type => Lesson, content => Content)
    @JoinColumn()
    lesson: Lesson
}