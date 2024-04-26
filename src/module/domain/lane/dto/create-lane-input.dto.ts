import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLaneInputDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'タスクのタイトル', example: 'タイトル' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'タスクの説明', example: '説明' })
  description: string;

  board: any;
}
