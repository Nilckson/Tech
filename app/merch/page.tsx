import { PrismaClient } from '@prisma/client'
import StorefrontUI from './StorefrontUI'

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
  // 1. Fetch from Supabase
  const databaseProducts = await prisma.product.findMany();

  // 2. Format the data to match the dark-theme UI requirements safely
  const formattedProducts: Product[] = databaseProducts.map((product: any) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    tag: product.category || "Hardware",
    description: product.description || "High-performance technical equipment.",
    gradient: product.gradient || "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    specs: product.specs ? JSON.parse(product.specs) : ["Specifications updating soon..."]
  }));

  // 3. Render the UI
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <StorefrontUI products={formattedProducts} />
    </main>
  );
}