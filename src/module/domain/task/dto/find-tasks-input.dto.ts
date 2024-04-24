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
  @ApiProperty({ description: '内容', example: '内容', required: false })
  content?: string;
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

  get content(): string | undefined {
    return this.condition?.content;
  }
}
