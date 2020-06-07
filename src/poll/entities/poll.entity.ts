import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'poll',
})
export class Poll {
  @PrimaryGeneratedColumn('uuid')
  poll_id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  poll_name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  option1: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  option2: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  option3: string;
}
