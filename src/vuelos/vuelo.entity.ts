import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vuelos')
export class Vuelo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  origen: string;

  @Column()
  destino: string;

  @Column()
  fecha: Date;

  @Column()
  precio: number;

  @Column()
  asientosDisponibles: number;

  @Column()
  estado: boolean;
}
