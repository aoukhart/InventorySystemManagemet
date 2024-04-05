import { Body, Controller, Get, HttpCode, Param, Post, Query, Res, Search, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PrismaService } from 'prisma/prisma.service';
import { ProductDto } from 'src/DTOs/global.dto';
import { Response } from "express";

@Controller('products')
export class ProductsController {
    constructor(
        private productServ: ProductsService){}
    
    @Post("create")
    async createProduct(
        @Res() res:Response,
        @Body(ValidationPipe) data:ProductDto
    ){
        try{
            await this.productServ.addProduct(data)
            res.send(data)
        }catch(e){
            res.status(400).send(e.message)
        }
    }

    @Get("search?")
    async searchProducts(@Query() queries){
        return await this.productServ.getProductsBy(queries)
    }
    //use query to search with all filters
    
}
