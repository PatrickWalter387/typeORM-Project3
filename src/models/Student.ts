import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("student")
export default class Student{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 45})
    name: string;

    @Column({length: 45, unique: true})
    key: string;
}