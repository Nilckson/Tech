"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createHardware(formData: FormData) {
  // 1. Grab the data from your form
  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const category = formData.get("category") as string;

  // 2. Insert it into the SQLite database
  await prisma.product.create({
    data: {
      name,
      price,
      category,
    },
  });

  // 3. Tell Next.js to instantly update the live website
  revalidatePath("/merch"); 
}