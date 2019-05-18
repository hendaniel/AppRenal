import { Dieta } from './dieta';
import { Historia } from './historia';

export class user{
    id: number;
    nombre          : string;
    correo          : string ;
    fechaNacimiento : string;
    dietas          : Dieta[];
    propiedades     : number[];
    historias       : Historia[];
}