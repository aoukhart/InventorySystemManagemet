/*
  Warnings:

  - You are about to drop the column `invoiceQuantity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `_InvoiceToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_InvoiceToProduct" DROP CONSTRAINT "_InvoiceToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_InvoiceToProduct" DROP CONSTRAINT "_InvoiceToProduct_B_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "invoiceQuantity";

-- DropTable
DROP TABLE "_InvoiceToProduct";

-- CreateTable
CREATE TABLE "ProductInInvoice" (
    "id" SERIAL NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "invoiceId" INTEGER NOT NULL,

    CONSTRAINT "ProductInInvoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductInInvoice" ADD CONSTRAINT "ProductInInvoice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductInInvoice" ADD CONSTRAINT "ProductInInvoice_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
