import { Propiedad } from './propiedad';
import { user } from './user';

export class Dieta{
    id          : number;
    meta        : number;
    propiedad   : Propiedad;
    usuario     : user;
}
