import { user } from './user';
import { Product } from './product';

export class Historia{
    id          : number;
    time        : Date;
    cantidad    : number;
    usuario     : user;
    alimento    : Product;
}
