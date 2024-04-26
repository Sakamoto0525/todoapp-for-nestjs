import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class FindManyLaneConditionInputDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'タイトル',
    example: 'タイトル',
    required: false,
  })
  title?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '説明', example: '説明', required: false })
  description?: string;
}

export class FindManyLaneInputDto {
  @ValidateNested()
  @ApiProperty({
    description: '検索条件',
    type: FindManyLaneConditionInputDto,
    required: false,
  })
  @Type(() => FindManyLaneConditionInputDto)
  condition?: FindManyLaneConditionInputDto;

  get title(): string | undefined {
    return this.condition?.title;
  }

  get description(): string | undefined {
    return this.condition?.description;
  }
}
