import OpenAI from 'openai';

interface Options {
  threadId: string;
  assistantId?: string;
}

export const createRunUseCase = async (openai: OpenAI, options: Options) => {
  const { assistantId = 'asst_MKqipkxUdlhIbIk27griDxOW', threadId } = options;

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
  });

  console.log({ run });

  return run;
};
