import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { model } = await req.json();
    if (!model) return NextResponse.json({ error: 'Model required' }, { status: 400 });

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      tools: [{ type: 'web_search_20250305' as any, name: 'web_search' }],
      system: `Tu es expert reconditionnement PC France. Utilise web_search pour chercher les prix actuels 2025 sur LeBonCoin, Backmarket, Fnac Occasion, Amazon Occasion. Reponds UNIQUEMENT avec un JSON valide sans markdown: {"fourchette_min":number,"fourchette_max":number,"prix_recommande":number,"analyse":"string"}`,
      messages: [{
        role: 'user',
        content: `Prix marché France 2025 (occasion + reconditionné) pour: ${model}. Fourchette réaliste pour vente magasin avec garantie 2 ans.`
      }]
    });

    // Extract text (may come after tool_use blocks)
    let text = '';
    for (const block of response.content) {
      if (block.type === 'text') { text = block.text; break; }
    }

    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Pas de JSON dans la réponse');
    const result = JSON.parse(match[0]);
    return NextResponse.json(result);
  } catch (e: any) {
    console.error('Market error:', e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
