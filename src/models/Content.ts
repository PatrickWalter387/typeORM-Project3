import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("content")
export default class Content{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string;
    
    @Column({name: "link_content", length: 45})
    linkContent: string;
}