import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SuppliersDto } from '../DTOs/global.dto';

@Injectable()
export class SuppliersService {
    constructor(private prisma : PrismaService){}

    async createSupplier(data: SuppliersDto) {
            await this.prisma.suppliers.create({
                data:{
                    name: data.name,
                    PhoneNumber: data.phoneNumber
                }
            });
   
    }

    async getSuppliers(){
        const suppliers = await this.prisma.suppliers.findMany({});
        return suppliers;
    }   

}
