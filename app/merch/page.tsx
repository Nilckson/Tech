import { prisma } from '../../lib/prisma'
import StorefrontUI from './StorefrontUI'

// 1. Define the Type based on your Prisma Schema
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  tag: string;
  specs: string[];
  gradient: string;
}

// 2. Server Component: Fetches Data from SQLite
export default async function MerchPage() {
  const databaseProducts = await prisma.product.findMany();

  // Convert the database models into the shape our UI expects
  const formattedProducts: Product[] = databaseProducts.map(product => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    tag: product.tag,
    gradient: product.gradient,
    // Parse the stringified JSON array back into an actual array of strings
    specs: JSON.parse(product.specs) as string[]
  }));

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <StorefrontUI products={formattedProducts} />
    </main>
  );
}