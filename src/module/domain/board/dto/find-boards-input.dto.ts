import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class FindManyBoardsConditionInputDto {
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
  description?: string;
}

export class FindManyBoardsInputDto {
  @ValidateNested()
  @ApiProperty({
    description: '検索条件',
    type: FindManyBoardsConditionInputDto,
    required: false,
  })
  @Type(() => FindManyBoardsConditionInputDto)
  condition?: FindManyBoardsConditionInputDto;

  get title(): string | undefined {
    return this.condition?.title;
  }

  get description(): string | undefined {
    return this.condition?.description;
  }
}
