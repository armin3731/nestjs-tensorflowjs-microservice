import { Analysis } from '@app/interfaces';
import { ApiProperty } from '@nestjs/swagger';

// Just for Swagger
export class AnalysisType implements Analysis {
  @ApiProperty({ example: false })
  identity_attack: boolean;

  @ApiProperty({ example: true })
  insult: boolean;

  @ApiProperty({ example: false })
  obscene: boolean;

  @ApiProperty({ example: false })
  severe_toxicity: boolean;

  @ApiProperty({ example: true })
  sexual_explicit: boolean;

  @ApiProperty({ example: false })
  threat: boolean;

  @ApiProperty({ example: true })
  toxicity: boolean;
}
