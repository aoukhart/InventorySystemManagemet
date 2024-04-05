import { Body, Controller, Post, ValidationPipe, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { invoiceDto } from 'src/DTOs/global.dto';
import { InvoiceService } from './invoice.service';
import { Response } from 'express';

@Controller('invoice')
export class InvoiceController {
    constructor(
        private readonly invoice: InvoiceService
    ){}

    @Post("add")
    async addInvoice(
        @Body(ValidationPipe) body:invoiceDto,
        @Res() res:Response){
        try{
            await this.invoice.createInvoice(body)
            res.send(body)
        }catch(e){
            res.status(400).send(e.message)
        }
    }

}
