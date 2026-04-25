import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { model } = await req.json();
    if (!model) return NextResponse.json({ error: 'Model required' }, { status: 400 });

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      tools: [{ type: 'web_search_20250305' as any, name: 'web_search' }],
      system: `Tu es un expert en reconditionnement PC en France. 
Utilise web_search pour chercher les prix ACTUELS 2025 sur LeBonCoin, Backmarket, Fnac Occasion, Amazon Occasion pour ce modèle de PC.
Après la recherche, réponds UNIQUEMENT avec un JSON valide (sans markdown) dans ce format exact:
{"fourchette_min":number,"fourchette_max":number,"prix_recommande":number,"analyse":"texte court 2-3 phrases expliquant la fourchette"}`,
      messages: [{
        role: 'user',
        content: `Cherche les prix actuels France (occasion + reconditionné) pour: ${model}
Donne une fourchette de prix de vente réaliste pour un magasin de reconditionnement avec garantie 2 ans.`
      }]
    });

    // Extract text from response (may come after tool use)
    let text = '';
    for (const block of response.content) {
      if (block.type === 'text') {
        text = block.text;
        break;
      }
    }

    // Extract JSON
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON in response');
    const result = JSON.parse(jsonMatch[0]);

    return NextResponse.json(result);
  } catch (e: any) {
    console.error('Market analysis error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
