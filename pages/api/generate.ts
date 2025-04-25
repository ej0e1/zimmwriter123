import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt, title, seoMode } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: seoMode
            ? 'Tulis artikel SEO panjang dan gaya manusia biasa (Bahasa Melayu)'
            : 'Tulis artikel panjang dalam Bahasa Melayu dengan gaya santai',
        },
        { role: 'user', content: `${title ? `Tajuk: ${title}\n` : ''}${prompt}` },
      ],
      temperature: 0.7,
    });

    const result = completion.choices[0].message?.content || '';
    res.status(200).json({ result });
  } catch (error) {
    console.error('[OPENAI ERROR]', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
