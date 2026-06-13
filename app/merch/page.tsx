import { prisma } from '../../lib/prisma'
import StorefrontUI from './StorefrontUI'

// THIS IS THE MAGIC LINE: It forces Next.js to always fetch live data
export const dynamic = "force-dynamic";

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
    gradient: product.gradient || "from-gray-800 to-[#0a0a0a]",
    specs: product.specs ? JSON.parse(product.specs) : ["Specifications updating soon..."]
  }));

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <StorefrontUI products={formattedProducts} />
    </main>
  );
}