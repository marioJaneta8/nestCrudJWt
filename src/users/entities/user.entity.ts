import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

   @Column({unique:true,nullable:false})     
   email:string;


   @Column({default:'user',type:'enum',enum:['user','admin']})
   rol:string;

    @Column({nullable:false})
    password:string;

    @DeleteDateColumn()
    deletedAt:Date;
    
    

    




}
