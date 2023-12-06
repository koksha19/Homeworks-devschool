
import {IsEnum, IsInt, IsNotEmpty, IsString} from "class-validator";

export enum Categories {
    VEGETABLES = 'VEGETABLES',
    FRUIT = "FRUIT",
    CLOTHES = "CLOTHES",
}

export class CreateApiDto {
    @IsInt()
    id: number

    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEnum(Categories)
    category: string;

    @IsInt()
    amount: number;

    @IsInt()
    price: number;
}