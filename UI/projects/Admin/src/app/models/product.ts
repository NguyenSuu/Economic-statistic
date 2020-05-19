import { ProductLine } from './product-line';
import { Units } from './units';

export interface Products{
    id:number,
    code:string,
    name:string,
    u_id:number,
    pL_id:number,
    units:Units,
    productLine:ProductLine
}