import { Products } from './product';
import { TypeData } from './type-data';

export interface MonthlyProduction{
    id:number,
    month:string,
    year:string,
    p_id:number,
    products:Products,
    typeData:TypeData,
    data:string
}