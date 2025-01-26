import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import {
  orthographyUseCase,
  prosConsDiscusserStreamUseCase,
  prosConsDiscusserUseCase,
} from './use-cases';
import { OrthographyDto, ProsConsDiscusserDto } from './dtos';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // * Solo va a llamar casos de uso

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }

  async prosConsDiscusser({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDiscusserUseCase(this.openai, { prompt });
  }
  async prosConsDiscusserStream({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDiscusserStreamUseCase(this.openai, { prompt });
  }
}
