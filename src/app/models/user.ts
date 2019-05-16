import { Dieta } from './dieta';

export class user{
    id: number;
    nombre          : string;
    correo          : string ;
    fechaNacimiento : string;
    dietas          : Dieta[];
    propiedades     : number[];
}