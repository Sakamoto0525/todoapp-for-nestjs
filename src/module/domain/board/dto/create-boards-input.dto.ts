import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBoardsInputDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ボードのタイトル', example: 'タイトル' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ボードの説明', example: '説明' })
  description: string;
}
