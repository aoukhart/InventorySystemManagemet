import { Module } from '@nestjs/common';
import { SuppliersModule } from './suppliers/suppliers.module';
import { ProductsModule } from './products/products.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [SuppliersModule, ProductsModule, InvoiceModule],
  controllers: [],
  providers: []
})

export class AppModule {}
