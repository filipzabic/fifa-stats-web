import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function POST(req: any) {
  const res = await req.json()
  await kv.set(res.key, res.val);
  return NextResponse.json(res);
}
