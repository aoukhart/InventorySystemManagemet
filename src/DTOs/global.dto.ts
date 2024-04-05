import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Length, ValidateNested, isNumber, isPositive } from "class-validator";
import { UUID } from "crypto";

export class SuppliersDto{
    @IsNotEmpty({message: "supplier name is empty"})
    @IsString({message:"supplier name must be a string"})
    name: string;

    @IsNotEmpty({message: "supplier phone number is empty"})
    @Length(10, 10,{message: "supplier number must contain 10 numbers"})
    phoneNumber: string;
}

export class ProductDto{
    @IsNotEmpty({message:"product name must not be empty"})
    @IsString({message:"product name must be a string"})
    name:string
    
    @IsString({message:"category must be a string"})
    @IsNotEmpty({message:"category must not be empty"})
    category:string//should be a model but need more info

    @IsPositive({message:"quantity should be greater than zero"})
    @IsInt({message:"quantity must be a number"})
    quantity:number
    
    @IsPositive({message:"price should be greater than zero"})
    @IsInt({message:"price must be a number"})
    price:number

    @IsString({message:"supplier name must be a string"})
    @IsNotEmpty({message:"supplier name must not be empty"})
    supplierName:string
}

export class ProdInvoiceDto{
    @IsString({message: "category must be a string"})
    @IsNotEmpty({message: "category must not be empty"})
    category : string
    
    @IsNotEmpty({message: "product name must not be empty"})
    @IsString({message: "product name must be a string"})
    productName : string

    @IsInt({message: "quantity must be a number"})
    @IsPositive({message: "quantity must be greater than zero"})
    quantity : number
}
export class invoiceDto{
    @IsString({message:"client name must be a string"})
    @IsNotEmpty({message:"client name must not be empty"})
    clientName: string
    
    @IsString({message:"client number must be a string"})
    @Length(10, 10,{message: "client number must contain 10 numbers"})
    @IsNotEmpty({message:"client name must not be empty"})
    clientNum : string
    
    @ValidateNested({each: true})
    @IsNotEmpty({message:"products missing"})
    @Type(() => ProdInvoiceDto)
    products: ProdInvoiceDto[]

    @IsString({message: "client addr must be a string"})
    @IsNotEmpty({message: "client addr must not be empty"})
    clientAddr: string

}