import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class FindManyTasksConditionInputDto {
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

export class FindManyTasksInputDto {
  @ValidateNested()
  @ApiProperty({
    description: '検索条件',
    type: FindManyTasksConditionInputDto,
    required: false,
  })
  @Type(() => FindManyTasksConditionInputDto)
  condition?: FindManyTasksConditionInputDto;

  get title(): string | undefined {
    return this.condition?.title;
  }

  get description(): string | undefined {
    return this.condition?.description;
  }
}
