import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from "typeorm";
import Class from "./Class";
import { IsEmail, Min, Max, MaxLength, MinLength } from "class-validator";

@Entity("student")
export default class Student{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 45})
    @MaxLength(45)
    @MinLength(5)
    name: string;

    @Column()
    @IsEmail(undefined, { message: "deve ser um Email" })
    email: string;

    @Column({length: 45, unique: true})
    @Min(20, { message: "maior que 20"})
    @Max(50)
    key: string;

    @ManyToMany(type => Class)
    @JoinTable()
    classes: Class;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}