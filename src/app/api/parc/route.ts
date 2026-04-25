import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

function getRedis() {
  // Upstash injecte ces variables automatiquement via Vercel
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) throw new Error('Redis env vars missing');
  return new Redis({ url, token });
}

const PARC_KEY = 'ldlc_parc';

export async function GET() {
  try {
    const redis = getRedis();
    const parc = await redis.get<any[]>(PARC_KEY) || [];
    return NextResponse.json(parc);
  } catch (e: any) {
    console.error('GET error:', e.message);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const redis = getRedis();
    const parc = await redis.get<any[]>(PARC_KEY) || [];
    const pc = await req.json();
    pc.id = Date.now();
    parc.unshift(pc);
    await redis.set(PARC_KEY, JSON.stringify(parc));
    return NextResponse.json(pc);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const redis = getRedis();
    const parc = await redis.get<any[]>(PARC_KEY) || [];
    const updated = await req.json();
    const idx = parc.findIndex((p: any) => p.id === updated.id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    parc[idx] = updated;
    await redis.set(PARC_KEY, JSON.stringify(parc));
    return NextResponse.json(updated);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const redis = getRedis();
    const { id } = await req.json();
    const parc = await redis.get<any[]>(PARC_KEY) || [];
    const filtered = parc.filter((p: any) => p.id !== id);
    await redis.set(PARC_KEY, JSON.stringify(filtered));
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
