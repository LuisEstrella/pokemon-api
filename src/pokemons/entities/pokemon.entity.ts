import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb'

@Entity()
export class Pokemon {
    @ObjectIdColumn()
    id: ObjectId

    @Column()
    Name: string;

    @Column()
    Type: string;

    @Column()
    Level: number;

    @Column()
    Image: string;
}