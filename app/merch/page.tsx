import { PrismaClient } from '@prisma/client'
import StorefrontUI from './StorefrontUI'

export const dynamic = 'force-dynamic'
const prisma = new PrismaClient()

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  tag: string;
  specs: string[];
  gradient: string;
}

export default async function MerchPage() {
  const databaseProducts = await prisma.product.findMany();

  const formattedProducts: Product[] = databaseProducts.map((product: any) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    tag: product.category || "Hardware",
    description: product.description || "High-performance technical equipment.",
    gradient: product.gradient || "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    specs: product.specs ? JSON.parse(product.specs) : ["Specifications updating soon..."]
  }));

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <StorefrontUI products={formattedProducts} />
    </main>
  );
}