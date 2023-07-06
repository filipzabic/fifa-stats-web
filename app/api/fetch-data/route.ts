import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function POST(req: any) {
  const res = await req.json()
  const resp = await kv.get(res.title);
  return NextResponse.json(resp);
}
