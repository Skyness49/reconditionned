import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

const PARC_KEY = 'ldlc_parc';

export async function GET() {
  try {
    const parc = await kv.get<any[]>(PARC_KEY) || [];
    return NextResponse.json(parc);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const parc = await kv.get<any[]>(PARC_KEY) || [];
    const pc = await req.json();
    pc.id = Date.now();
    parc.unshift(pc);
    await kv.set(PARC_KEY, parc);
    return NextResponse.json(pc);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const parc = await kv.get<any[]>(PARC_KEY) || [];
    const updated = await req.json();
    const idx = parc.findIndex((p: any) => p.id === updated.id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    parc[idx] = updated;
    await kv.set(PARC_KEY, parc);
    return NextResponse.json(updated);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const parc = await kv.get<any[]>(PARC_KEY) || [];
    const filtered = parc.filter((p: any) => p.id !== id);
    await kv.set(PARC_KEY, filtered);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
