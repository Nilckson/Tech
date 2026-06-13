'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function createHardware(formData: FormData) {
  // 1. Extract data from your form
  const name = formData.get('name') as string
  const price = Number(formData.get('price'))
  const category = formData.get('category') as string // Optional: if you added this to your Prisma schema

  // 2. Insert into Supabase via Prisma
  await prisma.product.create({
    data: {
      name: name,
      price: price,
      // category: category, // Uncomment if 'category' is in your schema.prisma
    },
  })

  // 3. Refresh the page to show data
  revalidatePath('/admin')
  revalidatePath('/merch')
}