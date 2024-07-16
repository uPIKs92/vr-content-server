import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, Generated, IntegerType, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { DataSource } from "typeorm";
import "reflect-metadata";
import DatabaseProperty from "./DatabaseProperty";

@Entity()
export class Join_User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar", { length: 15 })
    username: string;
}

@Entity()
export class Uservmt {
    @Column("int")
    id_user: number;
    @Column("varchar", { length: 50 })
    name: string;
    @PrimaryColumn("varchar", { length: 15 })
    username: string;
    @Column("varchar", { length: 8 })
    password: string;
    @Column("int")
    id_exercise: number;
    @Generated("increment")
    id: number;
    @Column("varchar", { length: 50 })
    scenario: string;
}

@Entity()
export class Archive_Report {
    @PrimaryGeneratedColumn("increment")
    id_report: number;
    @Column("varchar", { length: 50 })
    student: string;
    @Column("varchar", { length: 50 })
    instructor: string;
    @Column("varchar", { length: 50 })
    scenario: string;
    @Column("int")
    id_exercise: number;
    @Column("varchar", { length: 50 })
    duration: string;
    @Column("varchar", { length: 50 })
    date_: string;
    @UpdateDateColumn()
    date: Date;
    @Column("varchar", { length: 50 })
    status: string;
    @Column("varchar", { length: 50 })
    trainingmode: string;
    @Column("varchar", { length: 50 })
    exercisemode: string;
    @Column("varchar", { length: 100 })
    id_action: string;
    @Column("varchar", { length: 100 })
    path_video: string;
    @Column("varchar", { length: 100 })
    replay_file: string;
    @Column("varchar", { length: 100 })
    exercise: string;
    @Column("varchar", { length: 100 })
    progress: string;
}

@Entity()
export class Scenario_Action {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar", { length: 100 })
    actions_name: string;
    @Column("int")
    id_scenario: number;
    @Column("int")
    id_exercise: number;
    @Column("varchar", { length: 100, nullable: true })
    media_name: string;
    @Column("varchar", { length: 100 })
    type: string;
}

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn()
    id_exercise: number;
    @Column("varchar", { length: 100, nullable: true })
    project_name: string;
    @Column("text", { nullable: true })
    deskripsi: string;
    @Column("text", { nullable: true })
    sejarah_pemakaian: string;
    @Column("text", { nullable: true })
    sejarah_produksi: string;
    @Column("text", { nullable: true })
    spesifikasi: string;
    @Column("text", { nullable: true })
    kinerja: string;
    @Column("text", { nullable: true })
    persenjataan: string;
    @Column("varchar", { length: 100, nullable: true })
    media_name: string;
    @Column("varchar", { length: 100, nullable: true })
    media_type: string;
    @Column("int", { default : 0})
    selected_id_env: number;
}

@Entity()
export class Exercise_Environtment{
    @PrimaryGeneratedColumn()
    id_environtment: number;
    @Column("varchar", { length: 100, nullable: true })
    nama_environtment: string;
    @Column("int")
    id_exercise: number;
}

export const connectDB = new DataSource({
    type: 'postgres',
    host: DatabaseProperty.host,
    port: DatabaseProperty.port,
    username: DatabaseProperty.username,
    password: DatabaseProperty.password,
    database: DatabaseProperty.database,
    entities: [Join_User, Uservmt, Archive_Report, Scenario_Action, Exercise, Exercise_Environtment],
    synchronize: true,
    logging: false
});
console.log('Connected to database');