import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";

import { User } from "./User.entity"

@Entity({ name: "tweets" })
export class Tweets {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    tweet: string;
    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
