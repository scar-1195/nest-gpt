import OpenAI from 'openai';

interface Options {
  prompt: string;
  lang: string;
}

export const translateTextUseCase = async (
  openai: OpenAI,
  { lang, prompt }: Options,
) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `Traduce el siguiente texto al idioma ${lang}:${prompt}`,
      },
    ],
  });

  return { message: response.choices[0].message.content };
};
