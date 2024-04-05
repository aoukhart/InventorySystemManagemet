import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductDto } from 'src/DTOs/global.dto';

@Injectable()
export class ProductsService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async addProduct(data:ProductDto){
        const supplier = await this.prisma.suppliers.findFirst({
            where:{
                name: data.supplierName
            }
        })
        if (!supplier)
            throw new Error("supplier not found")
        const product = await this.prisma.product.findFirst({
            where:{
                name : data.name,
                category: data.category,
                supplierName: data.supplierName,
                price: data.price
            }
        })
        if (!product){
            await this.prisma.product.create({
                data:{
                    name: data.name,
                    category: data.category,
                    quantity: data.quantity,
                    price: data.price,
                    supplierName: data.supplierName
                }
            })
        }else{
            await this.prisma.product.update({
                where:{
                    id: product.id
                },data:{
                    quantity: product.quantity+data.quantity
                }
            })
        }

    }

    async getProductsBy(category: {category: string, name:string, supplier:string}){
        const products = await this.prisma.product.findMany({
            where:{
                name : category?.name,
                supplierName: category?.supplier,
                category: category?.category
            }
        })
        return products
    }
}
