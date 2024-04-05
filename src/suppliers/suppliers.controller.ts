import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, ValidationPipe } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersDto } from '../DTOs/global.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Response } from 'express';

@Controller('suppliers')
export class SuppliersController {
    constructor(private readonly suppliers: SuppliersService){}


    @Post("create")
    @HttpCode(200)
    async createSuppliers(@Res() res: Response,
        @Body(ValidationPipe) body:SuppliersDto
        ){
            try{
                await this.suppliers.createSupplier(body);
                res.send()
            }catch(e){
                
                res.status(HttpStatus.FOUND).send('supplier existing')
            }
    }

    @Get()
    async getSuppliersInfo(){
        return await this.suppliers.getSuppliers();
    }
    
}
