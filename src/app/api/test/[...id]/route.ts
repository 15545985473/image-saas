import { createUserSchema } from "@/server/db/validate-schema";
import { NextRequest, NextResponse } from "next/server";
import z from 'zod';

const inputSchema = z.object({
  name: z.string().max(10).min(3),
  email: z.string().email(),
})

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;

  const name = query.get('name');
  const email = query.get('email');
  const image = query.get('image');

  const result = createUserSchema.safeParse({ name, email, image });

  console.log(result, '======slp')
  if (result.success) {
    return NextResponse.json(result.data)
  } else {
    return NextResponse.json(result.error)
  }
}
