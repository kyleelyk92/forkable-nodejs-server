import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public first_name!: string;

    @Column() 
    public last_name!: string;

    @Column()
    public email!: string;

    @Column() 
    public created_at = new Date();
}