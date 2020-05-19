import { Fields } from './field';

export interface ProductLine{
    id:number,
    code:string,
    name:string,
    f_id:number,
    field:Fields
}