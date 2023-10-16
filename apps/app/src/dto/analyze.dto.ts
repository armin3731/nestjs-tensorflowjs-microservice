import { ApiProperty } from '@nestjs/swagger';

export class AnalyzeDto {
  @ApiProperty({
    description: 'The text you want to analyze its toxicity',
    example:
      'We are dudes on computers, moron. You are quite astonishingly stupid.',
  })
  text: string;
}
