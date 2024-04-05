import { Injectable } from '@nestjs/common';
import { builtinModules } from 'module';
import { PrismaService } from 'prisma/prisma.service';
import { invoiceDto } from 'src/DTOs/global.dto';

@Injectable()
export class InvoiceService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async createInvoice(body : invoiceDto){
        await Promise.all(
            body.products.map(async (prod)=>{
                const findProduct = await this.prisma.product.findFirst({
                    where:{
                        name: prod.productName,
                        category: prod.category
                    }
                })
            if (!findProduct)
                throw new Error("Product not Found or not enough in stock")
            console.log("ur product :", findProduct)
            if (prod.quantity > findProduct.quantity)
                throw new Error("not enough product in stock")
        })).catch((e)=>{
            throw new Error(e.message)
        })

    }

}
